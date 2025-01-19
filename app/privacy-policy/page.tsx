'use client'

import React from 'react'
import { Navbar } from '@/components/layout/navbar';
import { Typography } from '@/components/typography/typography';
import Footer from '@/components/layout/footer';
import privacyImage from '@/assets/privacy_policy.svg';
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
                        <Typography variant='h1' className='text-white'>Privacy Policy</Typography>

                        <Typography variant='content' className='text-white !mt-2'>At Try My Style, accessible from trymystyle.co.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Try My Style and how we use it.</Typography>


                        <Typography variant={"subheading"} className='text-white mt-12'>
                            Consent
                        </Typography>

                        <Typography variant='content' className='text-white !mt-2'>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</Typography>

                        <Typography variant={"subheading"} className='text-white mt-12'>
                            Information we collect
                        </Typography>

                        <Typography variant='content' className='text-white !mt-2'>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</Typography>


                    </div>
                    <div className="image flex-1">
                        <div className="flex justify-center items-center">
                            <Image src={privacyImage} alt='privacy' width={500} height={500} className='w-[80%] md:w-full h-full md:pt-0 pt-24 object-contain' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-white p-8 md:p-20">
                <div className="max-w-[1400px] mx-auto px-4">
                    <Typography variant={"subheading"} className='text-black'>
                        How we use your information
                    </Typography>
                    <div className="pl-6">

                        <Typography variant='content' className='text-black !mt-2'>
                            1.  Provide, operate, and maintain our website
                        </Typography>

                        <Typography variant='content' className='text-black !mt-2'>
                            2.  Improve, personalize, and expand our website
                        </Typography>

                        <Typography variant='content' className='text-black !mt-2'>
                            3.  Understand and analyze how you use our website
                        </Typography>

                        <Typography variant='content' className='text-black !mt-2'>
                            4.  Develop new products, services, features, and functionality
                        </Typography>

                        <Typography variant='content' className='text-black !mt-2'>
                            5.  Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
                        </Typography>

                        <Typography variant='content' className='text-black !mt-2'>
                            6.  Send you emails
                        </Typography>

                        <Typography variant='content' className='text-black !mt-2'>
                            7.  Find and prevent fraud
                        </Typography>
                    </div>

                    <Typography variant={"subheading"} className='text-black !mt-12'>
                        Log Files
                    </Typography>

                    <Typography variant='content' className='text-black !mt-2'>
                        Try My Style follows a standard procedure of using log files    . These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
                    </Typography>

                    <Typography variant={"subheading"} className='text-black !mt-12 '>
                        Advertising Partners Privacy Policies
                    </Typography>
                    <Typography variant='content' className='text-black !mt-2'>
                        You may consult this list to find the Privacy Policy for each of the advertising partners of Try My Style.
                        Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Try My Style, which are sent directly to users&apos; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                        Note that Try My Style has no access to or control over these cookies that are used by third-party advertisers.
                    </Typography>

                </div>
            </div>



            <div className="p-8 md:p-20 bg-black">
                <div className="max-w-[1400px] mx-auto ">
                    <Typography variant={"subheading"} className='text-white mt-2'>
                        Third Party Privacy Policies
                    </Typography>
                    <Typography variant='content' className='text-white !mt-2'>
                        Try My Style&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                        You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.
                    </Typography>

                    <Typography variant={"subheading"} className='text-white mt-12'>
                        GDPR Data Protection Rights
                    </Typography>
                    <Typography variant='content' className='text-white !mt-2'>
                        We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                    </Typography>

                    <ul className="list-disc pl-12 text-white">
                        <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>

                        <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>

                        <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>

                        <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>

                        <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>

                        <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                    </ul>
                    <Typography variant='content' className='text-white !mt-2'>
                        If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                    </Typography>

                    <Typography variant={"subheading"} className='text-white mt-12'>
                        Changes to This Privacy Policy
                    </Typography>
                    <Typography variant='content' className='text-white !mt-2'>
                        We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
                    </Typography>

                    <Typography variant={"subheading"} className='text-white mt-12'>
                        Contact Us
                    </Typography>

                    <Typography variant='content' className='text-white !mt-2'>
                        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at trymistyl@gmail.com
                    </Typography>

                </div>

            </div>

            <Footer openCalendly={openCalendly} />
        </div>
    )
}

export default Page;