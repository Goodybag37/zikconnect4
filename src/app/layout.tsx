import clsx from "clsx";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>

      <Script id="tiktok-pixel" strategy="afterInteractive">
        {`
          !function (w, d, t) {
            w.TiktokAnalyticsObject = t;
            var ttq = w[t] = w[t] || [];
            ttq.methods = [
              "page",
              "track",
              "identify",
              "instances",
              "debug",
              "on",
              "off",
              "once",
              "ready",
              "alias",
              "group",
              "enableCookie",
              "disableCookie",
              "holdConsent",
              "revokeConsent",
              "grantConsent"
            ];
            ttq.setAndDefer = function (t, e) {
              t[e] = function () {
                t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
              };
            };
            for (var i = 0; i < ttq.methods.length; i++) {
              ttq.setAndDefer(ttq, ttq.methods[i]);
            }
            ttq.instance = function (t) {
              var e = ttq._i[t] || [];
              for (var n = 0; n < ttq.methods.length; n++) {
                ttq.setAndDefer(e, ttq.methods[n]);
              }
              return e;
            };
            ttq.load = function (e, n) {
              var r = "https://analytics.tiktok.com/i18n/pixel/events.js";
              ttq._i = ttq._i || {};
              ttq._i[e] = [];
              ttq._i[e]._u = r;
              ttq._t = ttq._t || {};
              ttq._t[e] = +new Date;
              ttq._o = ttq._o || {};
              ttq._o[e] = n || {};
              n = document.createElement("script");
              n.type = "text/javascript";
              n.async = true;
              n.src = r + "?sdkid=" + e + "&lib=" + t;
              e = document.getElementsByTagName("script")[0];
              e.parentNode.insertBefore(n, e);
            };

            ttq.load("D9JJ8DJC77UD7F80E8LG");
            ttq.page();
          }(window, document, "ttq");
        `}
      </Script>
    </html>
  );
}

// import type { Metadata } from "next";
// import { DM_Sans } from "next/font/google";
// import "./globals.css";
// import clsx from "clsx";
// import {twMerge} from "tailwind-merge";

// const dmSans = DM_Sans({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Light Saas Landing Page",
//   description: "Template created by Frontend Tribe",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="relative">
//       <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
//         {children}
//       </body>
//     </html>
//   );
// }
