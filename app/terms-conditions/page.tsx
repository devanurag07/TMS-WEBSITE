'use client'

import React from 'react'
import { Navbar } from '@/components/layout/navbar';
import { Typography } from '@/components/typography/typography';
import Footer from '@/components/layout/footer';
import privacyImage from '@/assets/privacy_policy.svg';
import Image from 'next/image';

const Page = () => {
    return (
        <div>
            <Navbar />

            <div className='bg-black hero min-h-screen flex justify-center items-center'>
                <div className="flex max-w-[1400px] mx-auto gap-20">
                    <div className='container px-4'>
                        <Typography variant='h1' className='text-white'>Terms & Conditions and Privacy Policy</Typography>

                        <Typography variant='content' className='text-white mt-6'>Welcome to Try My Style&apos;s website! These terms and conditions outline the rules and regulations for the use of Virtstyle Technologies Private Limited&apos;s Website, located at trymystyle.co.in.</Typography>

                        <Typography variant={"subheading"} className='text-white mt-6'>
                            Acceptance of Terms
                        </Typography>

                        <Typography variant='content' className='text-white mt-6'>By accessing this website, we assume you accept these terms and conditions. Do not continue to use Try My Style&apos;s website if you do not agree to take all of the terms and conditions stated on this page.</Typography>

                        <Typography variant={"subheading"} className='text-white mt-6'>
                            Privacy Policy
                        </Typography>

                        <Typography variant='content' className='text-white mt-6'>At Try My Style, accessible from trymystyle.co.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Try My Style and how we use it.</Typography>

                        <Typography variant={"subheading"} className='text-white mt-6'>
                            Consent
                        </Typography>

                        <Typography variant='content' className='text-white mt-6'>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</Typography>

                        <Typography variant={"subheading"} className='text-white mt-6'>
                            Information we collect
                        </Typography>

                        <Typography variant='content' className='text-white mt-6'>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</Typography>

                    </div>
                    <div className="image">
                        <div className="w-[500px] h-[500px]">
                            <Image src={privacyImage} alt='privacy' width={500} height={500} className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-white flex items-center justify-center py-10">
                <div className="max-w-[1400px] mx-auto px-4">
                    <Typography variant={"subheading"} className='text-black'>
                        Definitions
                    </Typography>

                    <Typography variant='content' className='text-black mt-6'>
                        The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all Agreements: &quot; Client&quot;, &quot;You&quot; and &quot;Your&quot; refer to you, the person logging onto this website and complying with the Company&apos;s terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot;, and &quot;Us&quot; refer to our Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot; refer to both the Client and ourselves.
                    </Typography>

                    <Typography variant={"subheading"} className='text-black mt-6'>
                        Cookies
                    </Typography>

                    <Typography variant='content' className='text-black mt-6'>
                        We employ the use of cookies. By accessing Try My Style&apos;s website, you agreed to use cookies in agreement with the Virtstyle Technologies Private Limited&apos;s Privacy Policy. Most interactive websites use cookies to let us retrieve the user&apos;s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                    </Typography>

                    <Typography variant={"subheading"} className='text-black mt-6'>
                        License
                    </Typography>

                    <Typography variant='content' className='text-black mt-6'>
                        Unless otherwise stated, Virtstyle Technologies Private Limited and/or its licensors own the intellectual property rights for all material on Try My Style&apos;s website. All intellectual property rights are reserved. You may access this from Try My Style&apos;s website for your own personal use subjected to restrictions set in these terms and conditions.
                    </Typography>
                </div>
            </div>

            <div className="py-20 bg-black">
                <div className="max-w-[1400px] mx-auto px-4">
                    <Typography variant={"subheading"} className='text-white'>
                        Grant of License
                    </Typography>

                    <Typography variant='content' className='text-white mt-6'>
                        You hereby grant Virtstyle Technologies Private Limited a non-exclusive license to use, reproduce, edit, and authorize others to use, reproduce, and edit any of your Comments in any and all forms, formats, or media.
                    </Typography>

                    <Typography variant={"subheading"} className='text-white mt-6'>
                        Hyperlinking to our Content
                    </Typography>

                    <Typography variant='content' className='text-white mt-6'>
                        The following organizations may link to our Website without prior written approval:
                        <ul className="list-disc pl-6 mt-4">
                            <li>Government agencies</li>
                            <li>Search engines</li>
                            <li>News organizations</li>
                            <li>Online directory distributors</li>
                            <li>System-wide Accredited Businesses</li>
                        </ul>
                    </Typography>

                    <Typography variant='content' className='text-white mt-6'>
                        These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party&apos;s site.
                    </Typography>
                </div>
            </div>

            <div className="py-20 bg-white">
                <div className="max-w-[1400px] mx-auto px-4">
                    <Typography variant={"subheading"} className='text-black'>
                        Content Liability
                    </Typography>

                    <Typography variant='content' className='text-black mt-6'>
                        We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as: libelous, obscene, criminal, which infringes, otherwise violates, or advocates the infringement or other violation of any third party rights.
                    </Typography>

                    <Typography variant={"subheading"} className='text-black mt-6'>
                        Reservation of Rights
                    </Typography>

                    <Typography variant='content' className='text-black mt-6'>
                        We reserve the right to request that you remove all links or any particular link to our Website. You agree to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                    </Typography>
                </div>
            </div>

            <div className="py-20 bg-black">
                <div className="max-w-[1400px] mx-auto px-4">
                    <Typography variant={"subheading"} className='text-white'>
                        Disclaimer
                    </Typography>

                    <Typography variant='content' className='text-white mt-6'>
                        To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                        <ul className="list-disc pl-6 mt-4">
                            <li>limit or exclude our or your liability for death or personal injury</li>
                            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
                            <li>limit any of our or your liabilities in any way that is not permitted under applicable law</li>
                            <li>exclude any of our or your liabilities that may not be excluded under applicable law</li>
                        </ul>
                    </Typography>

                    <Typography variant='content' className='text-white mt-6'>
                        The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
                    </Typography>

                    <Typography variant='content' className='text-white mt-6'>
                        As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                    </Typography>
                </div>
            </div>

            <div className="py-20 bg-white">
                <div className="max-w-[1400px] mx-auto px-4">
                    <Typography variant={"subheading"} className='text-black'>
                        Advertising Partners Privacy Policies
                    </Typography>
                    <Typography variant='content' className='text-black mt-6'>
                        You may consult this list to find the Privacy Policy for each of the advertising partners of Try My Style.
                        Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Try My Style, which are sent directly to users&apos; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                        Note that Try My Style has no access to or control over these cookies that are used by third-party advertisers.
                    </Typography>

                    <Typography variant={"subheading"} className='text-black mt-6'>
                        Third Party Privacy Policies
                    </Typography>
                    <Typography variant='content' className='text-black mt-6'>
                        Try My Style&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                        You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.
                    </Typography>

                    <Typography variant={"subheading"} className='text-black mt-6'>
                        GDPR Data Protection Rights
                    </Typography>
                    <Typography variant='content' className='text-black mt-6'>
                        We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                        <ul className="list-disc pl-6">
                            <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>

                            <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>

                            <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>

                            <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>

                            <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>

                            <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                        </ul>

                        If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.

                    </Typography>

                    <Typography variant={"subheading"} className='text-black mt-6'>
                        Changes to This Privacy Policy
                    </Typography>
                    <Typography variant='content' className='text-black mt-6'>
                        We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
                    </Typography>

                    <Typography variant={"subheading"} className='text-black mt-6'>
                        Contact Us
                    </Typography>

                    <Typography variant='content' className='text-black mt-6'>
                        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at trymistyl@gmail.com
                    </Typography>

                    <Typography variant={"subheading"} className='text-black mt-6'>
                        iFrames
                    </Typography>
                    <Typography variant='content' className='text-black mt-6'>
                        Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                    </Typography>

                    <Typography variant={"subheading"} className='text-black mt-6'>
                        Removal of links from our website
                    </Typography>
                    <Typography variant='content' className='text-black mt-6'>
                        If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to do so or to respond to you directly.
                    </Typography>

                    <Typography variant='content' className='text-black mt-6'>
                        We may consider and approve other link requests from the following types of organizations:
                        <ul className="list-disc pl-6 mt-4">
                            <li>Commonly-known consumer and/or business information sources</li>
                            <li>Dot.com community sites</li>
                            <li>Associations or other groups representing charities</li>
                            <li>Online directory distributors</li>
                            <li>Internet portals</li>
                            <li>Accounting, law, and consulting firms</li>
                            <li>Educational institutions and trade associations</li>
                        </ul>
                    </Typography>

                    <Typography variant='content' className='text-black mt-6'>
                        We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Virtstyle Technologies Private Limited; and (d) the link is in the context of general resource information.
                    </Typography>

                    <Typography variant='content' className='text-black mt-6'>
                        If you are one of the organizations listed above and are interested in linking to our website, you must inform us by sending an e-mail to trymistyl@gmail.com. Please include your name, your organization name, contact information, as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                    </Typography>

                    <Typography variant='content' className='text-black mt-6'>
                        Approved organizations may hyperlink to our Website as follows:
                        <ul className="list-disc pl-6 mt-4">
                            <li>By use of our corporate name</li>
                            <li>By use of the uniform resource locator being linked to</li>
                            <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party&apos;s site</li>
                        </ul>
                    </Typography>

                    <Typography variant='content' className='text-black mt-6'>
                        No use of Virtstyle Technologies Private Limited&apos;s logo or other artwork will be allowed for linking absent a trademark license agreement.
                    </Typography>
                </div>

            </div>

            <Footer key={new Date().getTime()} openCalendly={() => { }} />
        </div>
    )
}

export default Page;