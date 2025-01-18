import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Try My Style - GenAI Smart Mirror for Fashion & Beauty',
    description: 'Leveraging GenAI to provide personalized and highly realistic Virtual Try-on solutions with our Smart Mirror for experiential brands in Fashion & Beauty.',
}

export default function AboutUsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
} 