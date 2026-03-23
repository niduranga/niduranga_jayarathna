import LegalLayout from '../../components/layouts/LegalLayout';

export default function TermsOfService() {
    return (
        <LegalLayout title="Terms of Service" lastUpdated="March 23, 2026">
            <section className="space-y-6">
                <p>
                    By accessing this website, you are agreeing to be bound by these Terms of Service and all applicable laws and regulations.
                </p>

                <h2 className="text-2xl mt-8">1. Use License</h2>
                <p>
                    Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only. You may not:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Modify or copy the materials;</li>
                    <li>Use the materials for any commercial purpose;</li>
                    <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
                </ul>

                <h2 className="text-2xl mt-8">2. Disclaimer</h2>
                <p>
                    The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.
                </p>

                <h2 className="text-2xl mt-8">3. Limitations</h2>
                <p>
                    In no event shall Niduranga Jayarathna or his suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on this site.
                </p>

                <h2 className="text-2xl mt-8">4. Governing Law</h2>
                <p>
                    These terms and conditions are governed by and construed in accordance with the laws of Sri Lanka and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
            </section>
        </LegalLayout>
    );
}
