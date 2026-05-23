import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Delauds Herbal Healthcare | Naturopathy & Holistic Wellness",
  description:
    "Natural healing in Accra — naturopathy, massage, detox, acupuncture, and herbal medicine at Delauds Herbal Healthcare.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
