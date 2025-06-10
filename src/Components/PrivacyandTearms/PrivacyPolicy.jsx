import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="relative bg-gradient-to-r from-[#1e347d] to-[#7686aa] pb-40 px-4 md:px-20 pt-10  overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-6 bg-[#ffffff] mt-20 pl-10 pt-10 pb-8 rounded-2xl">
                <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>

                <p><strong>Flyrad</strong> values your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our website, mobile application, and services.</p>

                <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
                <p>We collect personal and non-personal information to provide and improve our services. This includes:</p>
                <h3 className="text-xl font-semibold mt-4">a. Personal Information</h3>
                <ul className="list-disc list-inside ml-4">
                    <li>Name</li>
                    <li>Contact details (email address, phone number, etc.)</li>
                    <li>Educational qualifications</li>
                    <li>Employment history</li>
                    <li>Documents related to job applications and education</li>
                    <li>Payment information</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">b. Non-Personal Information</h3>
                <ul className="list-disc list-inside ml-4">
                    <li>Browser and device information</li>
                    <li>IP address</li>
                    <li>Cookies and usage data</li>
                    <li>Location data (if enabled)</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">How We Use Your Information</h2>
                <ul className="list-disc list-inside ml-4">
                    <li>To provide career-related services such as job applications and educational guidance.</li>
                    <li>To communicate updates, notifications, and offers.</li>
                    <li>To personalize your experience on our platform.</li>
                    <li>To process payments and transactions securely.</li>
                    <li>To improve our platform and resolve technical issues.</li>
                    <li>To comply with legal obligations.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">How We Share Your Information</h2>
                <p>We do not sell or share your personal information with third parties for marketing purposes. However, we may share your information in the following scenarios:</p>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Service Providers:</strong> Trusted third parties helping us deliver our services.</li>
                    <li><strong>Legal Requirements:</strong> If required by law or to protect our legal rights.</li>
                    <li><strong>Business Transfers:</strong> In case of mergers, acquisitions, or asset sales.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">Data Storage and Security</h2>
                <p>We take reasonable measures to protect your information against unauthorized access, alteration, or loss, including encrypted storage, security audits, and restricted access.</p>

                <h2 className="text-2xl font-semibold mt-6">Your Rights</h2>
                <ul className="list-disc list-inside ml-4">
                    <li>Access and review your personal information.</li>
                    <li>Request corrections to inaccurate data.</li>
                    <li>Withdraw consent for data usage.</li>
                    <li>Request deletion of your personal data, subject to legal obligations.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">Cookies and Tracking Technologies</h2>
                <p>We use cookies and similar tracking technologies to enhance user experience.</p>

                <h2 className="text-2xl font-semibold mt-6">Third-Party Links</h2>
                <p>Our platform may contain links to third-party websites. We are not responsible for their privacy practices.</p>

                <h2 className="text-2xl font-semibold mt-6">Children's Privacy</h2>
                <p>Our services are not intended for individuals under 18 years. If you believe a child has provided us with personal data, contact us immediately.</p>

                <h2 className="text-2xl font-semibold mt-6">Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be communicated through our platform.</p>

                <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
                <p>If you have any questions, please contact us at:</p>
                <p className="font-bold">FLYRAD</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

