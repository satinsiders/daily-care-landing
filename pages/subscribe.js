import { useEffect, useRef } from "react";
import Head   from "next/head";
import Link   from "next/link";
import Image  from "next/image";

/**
 * Simplified, side-effect-free PayPal flow
 * ─────────────────────────────────────────
 * • Inject the SDK script once (id="paypal-sdk").
 * • Render the button after the SDK loads.
 * • Tear it down on unmount so React Fast-Refresh is clean.
 */
export default function Subscribe() {
  const paypalLoaded = useRef(false);

  useEffect(() => {
    if (paypalLoaded.current) return; // prevent duplicate renders

    const addButtons = () => {
      if (!window.paypal) return; // guard against race conditions

      window.paypal
        .Buttons({
          style: {
            layout: "vertical",
            shape: "pill",
            color: "blue",
            label: "subscribe",
          },
          createSubscription: (data, actions) =>
            actions.subscription.create({
              plan_id: "P-3G29103659400461KNA6VROQ",
            }),
          onApprove: (data) =>
            alert(`Subscription ID: ${data.subscriptionID}`),
        })
        .render("#paypal-button-container");

      paypalLoaded.current = true;
    };

    // Use existing SDK if it’s already on the page.
    if (window.paypal) {
      addButtons();
      return;
    }

    // Otherwise, inject the SDK.
    const script = document.createElement("script");
    script.id = "paypal-sdk";
    script.src =
      "https://www.paypal.com/sdk/js?client-id=ASCftPMPLKW1Slo3sF03IE3G1EtrnpS5DcOc32wrZA6JeBFzVviW0qohqCnK5F7nfnluVkNQUAyiwhPl&vault=true&intent=subscription";
    script.async = true;
    script.onload = addButtons;
    document.body.appendChild(script);

    // Clean-up on unmount
    return () => {
      const container = document.getElementById("paypal-button-container");
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Subscribe to Daily Care | SuperfastSAT</title>
      </Head>

      <main className="min-h-screen py-12 px-4">
        {/* Wrapper gap: space-y-14 (≈56 px) keeps sections tidy */}
        <div className="mx-auto max-w-3xl space-y-14">
          {/* Hero */}
          <Image
            src="/images/subscribe-hero.png"
            alt="Students studying"
            width={1200}
            height={400}
            className="w-full rounded-lg shadow"
            priority
          />

          {/* Step 1 */}
          <section className="text-center space-y-4">
            <h2 className="text-xl font-semibold">Step 1: Subscribe to Daily Care</h2>
            <p className="text-gray-600">
              Subscribe to start your SAT prep journey.
              Click below to begin.
            </p>

            {/* Added mt-6 for extra breathing room below the text */}
            <div
              id="paypal-button-container"
              className="mx-auto w-full max-w-xs min-h-[64px] mt-6"
            />
          </section>

          {/* Step 2 */}
          <section className="text-center space-y-4">
            <h2 className="text-xl font-semibold">Step 2: Sign Up for the Platform</h2>
            <p className="text-gray-600 mb-8">
              Once you’ve subscribed, sign up for our platform to finish the
              setup—this takes less than 2 minutes.
            </p>
            <Link
              href="https://www.superfastsat.com/signup"
              className="inline-block mx-auto rounded-lg bg-accent px-6 py-3 text-white font-semibold shadow hover:opacity-90"
            >
              Sign Up for the Platform
            </Link>
          </section>

          {/* Step 3 */}
          <section className="text-center space-y-6">
            <h2 className="text-xl font-semibold">That’s it!</h2>
            <p className="text-gray-600">
              Your academic manager will reach out within a few hours via WhatsApp.
              Feel free to ping us first—we’re here to support you
              throughout your SAT journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/821027012761"
                className="rounded-lg bg-accent px-6 py-3 text-white font-semibold shadow hover:opacity-90"
              >
                Contact via WhatsApp
              </a>
              <a
                href="mailto:satinsiders@gmail.com"
                className="rounded-lg border border-accent px-6 py-3 font-semibold text-accent hover:bg-accent/10"
              >
                Email Us
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
