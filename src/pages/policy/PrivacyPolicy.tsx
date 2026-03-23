import LegalLayout from '../../components/layouts/LegalLayout';

export default function PrivacyPolicy() {
    return (
        <LegalLayout title="Privacy Policy" lastUpdated="March 23, 2026">
            <section className="space-y-6">
                <p>
                    Your privacy is important to me. This Privacy Policy explains how I collect, use, and safeguard your information when you visit my website or use my contact forms.
                </p>

                <h2 className="text-2xl mt-8">1. Information I Collect</h2>
                <p>
                    I only collect information that you voluntarily provide through the contact form, such as your <strong>name</strong>, <strong>email address</strong>, and the <strong>content of your message</strong>.
                </p>

                <h2 className="text-2xl mt-8">2. How I Use Your Information</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>To respond to your inquiries and project requests.</li>
                    <li>To provide ongoing support regarding your services.</li>
                    <li>To improve website functionality and user experience.</li>
                </ul>

                <h2 className="text-2xl mt-8">3. Data Protection</h2>
                <p>
                    I implement industry-standard security measures to maintain the safety of your personal information. I do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
                </p>

                <h2 className="text-2xl mt-8">4. Contact Me</h2>
                <p>
                    If you have any questions regarding this privacy policy, you may contact me at: <br />
                    <a href="mailto:nidurangajayarathna@gmail.com" className="text-blue-600 underline">nidurangajayarathna@gmail.com</a>
                </p>
            </section>
        </LegalLayout>
    );
}
