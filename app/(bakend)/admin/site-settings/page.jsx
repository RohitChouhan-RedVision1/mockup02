"use client";
import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from 'axios';
import { toast } from '@/hooks/use-toast';
import { Toaster } from "@/components/ui/toaster";
import DefaultLayout from "@/components/admin/Layouts/DefaultLaout";

export function InputForm() {
    const [loading, setLoading] = useState(false);

    const form = useForm({
        defaultValues: {
            id: "",
            title: "",
            email: "",
            mobile: "",
            mobile2: "",
            arn: "",
            euin: "",
            address: "",
            mapurl: "",
            twitter: "",
            facebook: "",
            instagram: "",
            linkedin: "",
            youtube: "",
            description: "",
        },
    });

    const onSubmit = async (data) => {
        setLoading(true)
        try {
            const response = await axios.post('/api/admin/site-settings/', data);
            if (response.status === 201) {
                toast({
                    variant: '',
                    title: "Data uploaded successfully",
                });
            } else {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request.",
                });
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An unexpected error occurred.");
        }
        finally { setLoading(false) }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get("/api/admin/site-settings");
            if (response.status === 200) {
                const data = response.data[0];
                // Set form values
                form.setValue("id", data._id || "");
                form.setValue("title", data.title || "");
                form.setValue("email", data.email || "");
                form.setValue("mobile2", data.mobile2 || "");
                form.setValue("mobile", data.mobile || "");
                form.setValue("arn", data.arn || "");
                form.setValue("euin", data.euin || "");
                form.setValue("address", data.address || "");
                form.setValue("mapurl", data.mapurl || "");
                form.setValue("twitter", data.twitter || "");
                form.setValue("facebook", data.facebook || "");
                form.setValue("instagram", data.instagram || "");
                form.setValue("linkedin", data.linkedin || "");
                form.setValue("youtube", data.youtube || "");
                form.setValue("description", data.description || "");
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    React.useEffect(() => { fetchCategories(); }, []);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">

                </div>
                <div className="grid grid-cols-2 gap-3">
                    {/* Username Field */}
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Name" {...field} aria-label="Name" className="border-2 border-gray-500" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Email Field */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="Email" {...field} aria-label="Email" className="border-2 border-gray-500" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Mobile Field */}
                    <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mobile</FormLabel>
                                <FormControl>
                                    <Input placeholder="Mobile" {...field} aria-label="Mobile Number" className="border-2 border-gray-500" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Mobile Field */}
                    <FormField
                        control={form.control}
                        name="mobile2"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Alternate Mobile</FormLabel>
                                <FormControl>
                                    <Input placeholder="Alternate Mobile" {...field} aria-label="Mobile Number" className="border-2 border-gray-500" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* ARN Field */}
                    <FormField
                        control={form.control}
                        name="arn"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ARN</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="ARN" {...field} aria-label="ARN" className="border-2 border-gray-500" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* EUIN Field */}
                    <FormField
                        control={form.control}
                        name="euin"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>EUIN</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="EUIN" {...field} aria-label="EUIN" className="border-2 border-gray-500" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                {/* Address Field */}
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Address" {...field} aria-label="Address" className="border-2 border-gray-500" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Map URL Field */}
                <FormField
                    control={form.control}
                    name="mapurl"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Map URL</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Map URL" {...field} aria-label="Map URL" className="border-2 border-gray-500" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Description Field */}
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Description" {...field} aria-label="Description" className="border-2 border-gray-500" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-3">

                    {/* Twitter Field */}
                    <FormField
                        control={form.control}
                        name="twitter"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Twitter Link</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Twitter Link" {...field} aria-label="Twitter Link" className="border-2 border-gray-500" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Facebook Field */}
                    <FormField
                        control={form.control}
                        name="facebook"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Facebook Link</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Facebook Link" {...field} aria-label="Facebook Link" className="border-2 border-gray-500" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Instagram Field */}
                    <FormField
                        control={form.control}
                        name="instagram"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Instagram Link</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Instagram Link" {...field} aria-label="Instagram Link" className="border-2 border-gray-500" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* LinkedIn Field */}
                    <FormField
                        control={form.control}
                        name="linkedin"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>LinkedIn Link</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="LinkedIn Link" {...field} aria-label="LinkedIn Link" className="border-2 border-gray-500" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* YouTube Field */}
                    <FormField
                        control={form.control}
                        name="youtube"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>YouTube Link</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="YouTube Link" {...field} aria-label="YouTube Link" className="border-2 border-gray-500" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" className="secondarybgcolor">Submit</Button>
            </form>
        </Form>
    );
}

const AddPost = () => {
    return (
        <DefaultLayout>
            <div className="">
                <div className="flex justify-between">
                    <h1 className='font-bold text-gray-700 text-2xl mb-7'>Site Settings</h1>
                </div>
                <div className='p-5 bg-gray-100 rounded '>
                    <InputForm />
                    <Toaster />
                </div>
            </div>
        </DefaultLayout>
    )
}

export default AddPost;
