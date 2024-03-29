import './ui/global.css'
import { montserrat } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className + ' antialiased'}>
      <body>{children}</body>
    </html>
  );
}
