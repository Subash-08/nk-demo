import React from 'react';

// Icons for social media
const TwitterIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.229 13.229 0 0 1-9.602-4.868 4.662 4.662 0 0 0 1.443 6.217 4.658 4.658 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568 4.692 4.692 0 0 1-2.104.08 4.661 4.661 0 0 0 4.352 3.234 9.348 9.348 0 0 1-5.786 1.995 9.5 9.5 0 0 1-1.112-.065 13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.45 9.45 0 0 0 2.323-2.41z"></path></svg>;
const GithubIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path></svg>;
const LinkedInIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>;

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {/* Column 1: Logo & Tagline */}
                    <div className="col-span-2 lg:col-span-1">
                         <a href="#" className="font-extrabold text-3xl text-white tracking-tighter">
                            NK
                        </a>
                        <p className="mt-4 text-gray-400 text-sm">
                            Crafting digital futures with innovation and expertise.
                        </p>
                    </div>

                    {/* Column 2: Solutions */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white tracking-wider uppercase">Solutions</h4>
                        <div className="flex flex-col space-y-3">
                            <FooterLink href="#">Data Intelligence</FooterLink>
                            <FooterLink href="#">Performance Marketing</FooterLink>
                            <FooterLink href="#">Web Development</FooterLink>
                            <FooterLink href="#">AI & Automation</FooterLink>
                        </div>
                    </div>

                    {/* Column 3: Company */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white tracking-wider uppercase">Company</h4>
                        <div className="flex flex-col space-y-3">
                            <FooterLink href="#">About Us</FooterLink>
                            <FooterLink href="#">Works</FooterLink>
                            <FooterLink href="#">Blogs</FooterLink>
                            <FooterLink href="#">Contact</FooterLink>
                        </div>
                    </div>
                    
                    {/* Column 4: Resources */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white tracking-wider uppercase">Resources</h4>
                        <div className="flex flex-col space-y-3">
                            <FooterLink href="#">Case Studies</FooterLink>
                            <FooterLink href="#">Help Center</FooterLink>
                            <FooterLink href="#">Privacy Policy</FooterLink>
                        </div>
                    </div>

                    {/* Column 5: Subscribe */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1">
                        <h4 className="font-semibold text-white tracking-wider uppercase">Subscribe</h4>
                        <p className="mt-4 text-gray-400 text-sm">
                            Get the latest insights and updates from our team.
                        </p>
                        <div className="mt-4 flex">
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-white"
                                aria-label="Email for newsletter"
                            />
                            <button className="bg-sky-500 text-white px-4 py-2 rounded-r-md hover:bg-sky-600 transition-colors" aria-label="Subscribe">
                                →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-10 border-gray-700" />

                {/* Bottom Strip */}
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <p className="text-sm text-gray-500 mb-4 sm:mb-0">
                        © {new Date().getFullYear()} NK Solutions. All Rights Reserved.
                    </p>
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter"><TwitterIcon /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub"><GithubIcon /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn"><LinkedInIcon /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;