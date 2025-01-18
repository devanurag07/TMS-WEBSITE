'use client'

import React from 'react'
import { Navbar } from '@/components/layout/navbar';
import { Typography } from '@/components/typography/typography';
import Footer from '@/components/layout/footer';
import termsImage from '@/assets/terms_policy.svg';
import Image from 'next/image';
import { useCalendly } from '@/lib/features/calendly/context/CalendlyContext';

const Page = () => {

    const { openCalendly } = useCalendly();
    return (
        <div>
            <Navbar />
            <div className='bg-black hero min-h-screen flex justify-center items-center'>
                <div className="flex max-w-[1400px] mx-auto gap-20 md:flex-row flex-col-reverse justify-center items-center">
                    <div className='px-8 md:px-0 pb-12 md:pb-0 flex-1'>
                        <Typography variant='h1' className='text-white'>Terms & Conditions</Typography>

                        <Typography variant={"subheading"} className='text-white mt-12'>
                            Welcome to Try My Style's website!
                        </Typography>

                        <Typography variant='content' className='text-white !mt-2'>
                            These terms and conditions outline the rules and regulations for the use of Virtstyle Technologies Private Limited's Website, located at trymystyle.co.in.
                            By accessing this website, we assume you accept these terms and conditions. Do not continue to use Try My Style's website if you do not agree to take all of the terms and conditions stated on this page.
                        </Typography>
                    </div>
                    <div className="image flex-1">
                        <div className="flex justify-center items-center">
                            <Image src={termsImage} alt='privacy' width={500} height={500} className='w-[80%] md:w-full h-full object-contain' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-white flex items-center justify-center py-10">
                <div className="max-w-[1400px] mx-auto px-4">
                    <Typography variant={"subheading"} className='text-black'>
                        Definitions
                    </Typography>
                    <Typography variant='content' className='text-black !mt-2'>
                        The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refer to you, the person logging onto this website and complying with the Company's terms and conditions. "The Company", "Ourselves", "We", "Our", and "Us" refer to our Company. "Party", "Parties", or "Us" refer to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of the provision of the Company's stated services, in accordance with and subject to the prevailing law of in. Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or they are taken as interchangeable and therefore as referring to the same.

                    </Typography>

                    <Typography variant={"subheading"} className='text-black mt-12'>
                        Cookies
                    </Typography>

                    <Typography variant='content' className='text-black !mt-2'>
                        We employ the use of cookies. By accessing Try My Style&apos;s website, you agreed to use cookies in agreement with the Virtstyle Technologies Private Limited&apos;s Privacy Policy. Most interactive websites use cookies to let us retrieve the user&apos;s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                    </Typography>

                    <Typography variant={"subheading"} className='text-black mt-6'>
                        License
                    </Typography>

                    <Typography variant='content' className='text-black mt-6'>
                        Unless otherwise stated, Virtstyle Technologies Private Limited and/or its licensors own the intellectual property rights for all material on Try My Style's website. All intellectual property rights are reserved. You may access this from Try My Style's website for your own personal use subjected to restrictions set in these terms and conditions.
                    </Typography>
                    <ul className="list-decimal pl-6 mt-4">
                        <li>
                            <Typography variant='content' className='text-black'>Republish material from Try My Style's website</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-black'>Sell, rent, or sub-license material from Try My Style's website</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-black'>Reproduce, duplicate, or copy material from Try My Style's website</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-black'>Redistribute content from Try My Style's website</Typography>
                        </li>
                    </ul>


                    <Typography variant={"subheading"} className='text-black mt-12'>
                        Grant of License
                    </Typography>
                    <Typography variant='content' className='text-black !mt-2'>
                        You hereby grant Virtstyle Technologies Private Limited a non-exclusive license to use, reproduce, edit, and authorize others to use, reproduce, and edit any of your Comments in any and all forms, formats, or media.
                    </Typography>
                </div>
            </div>

            <div className="py-20 bg-black">
                <div className="max-w-[1400px] mx-auto px-4">
                    <Typography variant={"subheading"} className='text-white'>
                        Hyperlinking to our Content
                    </Typography>

                    <Typography variant='content' className='text-white !mt-2'>
                        The following organizations may link to our Website without prior written approval:
                    </Typography>
                    <ul className="list-decimal pl-6 mt-4 text-white">
                        <li>
                            <Typography variant='content' className='text-white'>Government agencies</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-white'>Search engines</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-white'>News organizations</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-white'>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-white'>System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site</Typography>
                        </li>
                    </ul>

                    <Typography variant='content' className='text-white mt-6'>
                        These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party&apos;s site.
                    </Typography>

                    <Typography variant='content' className='text-white mt-6'>
                        We may consider and approve other link requests from the following types of organizations:
                    </Typography>
                    <ul className="list-decimal pl-6 mt-4 text-white">
                        <li>
                            <Typography variant='content' className='text-white'>Commonly-known consumer and/or business information sources</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-white'>Dot.com community sites</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-white'>Associations or other groups representing charities</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-white'>Online directory distributors</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-white'>Internet portals</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-white'>Accounting, law, and consulting firms</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-white'>Educational institutions and trade associations</Typography>
                        </li>
                    </ul>

                    <Typography variant='content' className='text-white mt-6'>
                        We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Virtstyle Technologies Private Limited; and (d) the link is in the context of general resource information.
                    </Typography>

                    <Typography variant='content' className='text-white mt-6'>
                        These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) fits within the context of the linking party&apos;s site.
                    </Typography>

                    <Typography variant='content' className='text-white mt-6'>
                        If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to trymistyl@gmail.com. Please include your name, your organization name, contact information, as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                    </Typography>

                    <Typography variant='content' className='text-white mt-6'>
                        Approved organizations may hyperlink to our Website as follows:

                    </Typography>
                    <ul className="list-decimal pl-6 mt-4 text-white">
                        <li>
                            <Typography variant='content' className='text-white'>By use of our corporate name</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-white'>By use of the uniform resource locator being linked to</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-white'>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party&apos;s site</Typography>
                        </li>
                    </ul>

                    <Typography variant='content' className='text-white mt-6'>
                        No use of Virtstyle Technologies Private Limited&apos;s logo or other artwork will be allowed for linking absent a trademark license agreement.
                    </Typography>


                </div>
            </div>

            <div className="py-20 bg-white">
                <div className="max-w-[1400px] mx-auto px-4">
                    <Typography variant={"subheading"} className='text-black'>
                        iFrames
                    </Typography>

                    <Typography variant='content' className='text-black !mt-2'>
                        Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                    </Typography>

                    <Typography variant={"subheading"} className='text-black mt-12'>
                        Content Liability
                    </Typography>

                    <ul className="list-decimal pl-6 mt-4">
                        <li>
                            <Typography variant='content' className='text-black'>We shall not be held responsible for any content that appears on your Website.</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-black'>You agree to protect and defend us against all claims that are rising on your Website.</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-black'>No link(s) should appear on any Website that may be interpreted as: libelous, obscene, criminal, which infringes, otherwise violates, or advocates the infringement or other violation of any third party rights.</Typography>
                        </li>
                    </ul>

                    <Typography variant={"subheading"} className='text-black mt-12'>

                        Reservation of Rights
                    </Typography>
                    <ul className="list-decimal pl-6 !mt-2">
                        <li>
                            <Typography variant='content' className='text-black'>We reserve the right to request that you remove all links or any particular link to our Website.</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-black'>You agree to immediately remove all links to our Website upon request.</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-black'>We also reserve the right to amend these terms and conditions and its linking policy at any time.</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-black'>By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</Typography>
                        </li>
                    </ul>
                    <Typography variant={"subheading"} className='text-black mt-12'>
                        Removal of links from our website
                    </Typography>

                    <Typography variant='content' className='text-black !mt-2'>

                    </Typography>

                    <ul className="list-decimal pl-6 !mt-2">
                        <li>
                            <Typography variant='content' className='text-black'>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment.</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-black'>We will consider requests to remove links but we are not obligated to do so or to respond to you directly.</Typography>
                        </li>
                    </ul>

                    <Typography variant={"subheading"} className='text-black mt-12'>
                        Disclaimer
                    </Typography>
                    <ul className="list-decimal pl-6 mt-4">
                        <li>
                            <Typography variant='content' className='text-black'>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.</Typography>
                        </li>
                        <li>
                            <Typography variant='content' className='text-black'>Nothing in this disclaimer will: limit or exclude our or your liability for death or personal injury</Typography>
                        </li>
                        <div className="pl-8">
                            <ul className="list-decimal !mt-2">
                                <li>
                                    <Typography variant='content' className='text-black'>limit or exclude our or your liability for death or personal injury</Typography>
                                </li>
                                <li>
                                    <Typography variant='content' className='text-black'>limit or exclude our or your liability for fraud or fraudulent misrepresentation</Typography>
                                </li>
                                <li>
                                    <Typography variant='content' className='text-black'>limit any of our or your liabilities in any way that is not permitted under applicable law</Typography>
                                </li>
                                <li>
                                    <Typography variant='content' className='text-black'>exclude any of our or your liabilities that may not be excluded under applicable law</Typography>
                                </li>
                            </ul>
                        </div>
                        <li>
                            <Typography variant='content' className='text-black'>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer:
                            </Typography>
                            <ul className="list-decimal pl-8 !mt-2">
                                <li>
                                    <Typography variant='content' className='text-black'>are subject to the preceding paragraph;</Typography>
                                </li>
                                <li>
                                    <Typography variant='content' className='text-black'>govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.</Typography>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Typography variant='content' className='text-black'>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</Typography>
                        </li>
                    </ul>


                </div>
            </div>

            <Footer openCalendly={openCalendly} />
        </div >
    )
}

export default Page;