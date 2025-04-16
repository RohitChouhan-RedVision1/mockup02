"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbItem, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { calculators, performance } from '@/data/calculators'


export default function Page() {
    const [isMonthlySip, setIsMonthlySip] = useState(true);
    return (
        <section className='py-20 px-2 md:py-20 md:px-20'>
            <div className="page-header">
                <div className="container mx-auto">
                    <div className="items-center">
                        <div className="page-header-box">
                            <h1 className="text-anime-style-2" data-cursor="-opaque">Calculators</h1>
                            <Breadcrumb>
                                <BreadcrumbList className="text-white">
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/">Tools</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Calculator</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:px-40 mt-4 px-10 mx-auto'>
                <div className="flex  space-x-4 mb-14">
                    <Button
                        onClick={() => { setIsMonthlySip(true) }}
                        className={`text-lg px-4 py-5 rounded ${!isMonthlySip ? 'bg-[var(--secondary)] text-white' : 'bg-[var(--primary)]'}`}
                    >
                        <p>Calculators</p>
                    </Button>
                    <Button
                        onClick={() => { setIsMonthlySip(false) }}
                        className={`text-lg px-4 py-5 rounded ${isMonthlySip ? 'bg-[var(--secondary)] text-white' : 'bg-[var(--primary)]'}`}
                    >
                        <p>Performance</p>
                    </Button>
                </div>
                {isMonthlySip ?
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                        {calculators.map((item, index) => (
                            <Link href={item?.route} key={index}>
                                <div className='px-5 py-10 bg-[var(--secondary)] hover:bg-[var(--primary)] hover:text-black flex gap-2 justify-between rounded items-center shadow-md group'>
                                    <div>
                                        <Image src={item?.image} alt='' width={40} height={40} />
                                    </div>
                                    <div>
                                        <p className='font-bold text-white text-md group-hover:text-black'>
                                            {item?.title}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    :
                    <div className='grid md:grid-cols-3 gap-5'>
                        {performance.map((item, index) => (
                            <Link href={item.link} key={index}>
                                <div className='px-10 py-10 bg-[var(--secondary)] hover:bg-[var(--primary)] flex justify-between rounded items-center shadow-md group'>
                                    <div>
                                        <Image src={item?.image} alt='' width={20} height={20} />
                                    </div>
                                    <div>
                                        <p className='font-bold text-white text-xl group-hover:[#F3F3E0]'>
                                            {item?.title}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                }
            </div >
        </section>
    )
}