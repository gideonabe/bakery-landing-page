import { useState } from "react";
import { Link } from "react-router-dom";
import { Coins, ArrowRight, ChartLine, Shield, Wallet, Users, Info, Copyright, FileText, Globe, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PaymentModal from "@/components/PaymentModal";
import bkg from "@/assets/background.jpg"

const HomePage = () => {
  const [selectedPlan, setSelectedPlan] = useState<{amount: number; returnRate: number} | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const investmentPlans = [
    { 
      amount: 100, 
      returnRate: 20, 
      title: "Starter Plan",
      description: "Perfect for beginners looking to start their crypto investment journey",
      popular: false
    },
    { 
      amount: 500, 
      returnRate: 30, 
      title: "Growth Plan",
      description: "Ideal for investors ready to accelerate their portfolio growth",
      popular: true
    },
    { 
      amount: 1000, 
      returnRate: 40, 
      title: "Premium Plan",
      description: "Maximum returns for serious investors and high-net-worth individuals",
      popular: false
    },
  ];

  const handleGetStarted = (plan: {amount: number; returnRate: number}) => {
    setSelectedPlan(plan);
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-cover bg-center text-white " style={{ backgroundImage: `url(${bkg})` }}>
        <div className="container max-w-full mx-auto px-4 sm:px-6 py-6 bg-black/60 backdrop-brightness-75 ">
          <div className=" flex items-center justify-between mb-12 ">
            <div className="flex items-center gap-2 cursor-pointer ">
              <Link to="/">
                <Coins className="h-8 w-8 text-indigo-300" />
                <h1 className="text-2xl font-bold">CryptoVision</h1>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/signin" className="text-sm font-medium hover:underline">
                Log In
              </Link>
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
          
          <div className="max-w-3xl pb-16 pt-8">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Discover even more to love about CryptoVision
            </h2>
            <p className="text-lg mb-8 text-indigo-100">
              Our expert insights and real-time market analytics give you the confidence to make smart decisions on CryptoVision's easy-to-use platform.
            </p>
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Promo Banner */}
      <div className="bg-indigo-800 text-white text-center py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold mb-2">Get up to $500 in crypto for a limited time!</h3>
          <p className="text-sm text-gray-200 mb-4">
            Open a verified account and make qualifying deposits within 60 days. Terms apply.
          </p>
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
            <Link to="/signup">Learn More</Link>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-white">
        {/* Investment Plans Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Choose Your Investment Plan</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Start your crypto investment journey with our carefully crafted plans designed to maximize your returns in just 1 month.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {investmentPlans.map((plan, index) => (
                <Card key={index} className={`relative border-2 hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-indigo-500 shadow-lg scale-105' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto p-4 bg-indigo-100 rounded-full mb-4 w-20 h-20 flex items-center justify-center">
                      <DollarSign className="h-10 w-10 text-indigo-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800">{plan.title}</CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-indigo-600">
                        ${plan.amount}
                      </div>
                      <div className="text-sm text-gray-500">Investment Amount</div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 py-4 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        <span className="text-2xl font-bold text-green-600">{plan.returnRate}%</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Return in 1 month
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">1 Month Duration</span>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-lg font-semibold text-gray-800">
                        Expected Profit: <span className="text-green-600">${(plan.amount * plan.returnRate / 100).toFixed(0)}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Total Return: ${plan.amount + (plan.amount * plan.returnRate / 100)}
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-6">
                    <Button 
                      onClick={() => handleGetStarted(plan)}
                      className={`w-full ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-800 hover:bg-gray-900'}`}
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-indigo-50 rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-indigo-800 mb-2">Why Choose Our Investment Plans?</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✅ Guaranteed returns within 30 days</li>
                  <li>✅ Professional portfolio management</li>
                  <li>✅ 24/7 customer support</li>
                  <li>✅ Secure and transparent transactions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left">How do I open an account?</AccordionTrigger>
                  <AccordionContent>
                    <p>Opening an account with CryptoVision is simple. Click the "Sign Up" button, provide your email address and create a password, complete the verification process, and you're ready to start trading.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left">How do I deposit funds?</AccordionTrigger>
                  <AccordionContent>
                    <p>CryptoVision supports multiple funding methods including bank transfers, credit/debit cards, and cryptocurrency deposits. Once logged in, navigate to the "Fiat" section and follow the instructions to add funds to your account.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left">What are your commission rates and fees?</AccordionTrigger>
                  <AccordionContent>
                    <p>CryptoVision offers competitive trading fees starting at 0.1% per transaction. Premium accounts enjoy even lower fees. There are no hidden charges, and we provide full transparency on all costs associated with our services.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left">How do you ensure the security and privacy of my account?</AccordionTrigger>
                  <AccordionContent>
                    <p>We implement industry-leading security measures including two-factor authentication, cold storage for the majority of assets, regular security audits, and advanced encryption for all sensitive data. Your privacy and security are our top priorities.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Legal Disclosures Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Important Information</h2>
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="disclosures" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="disclosures" className="text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      <span>Disclosures</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="risks" className="text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>Risk Factors</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="regulations" className="text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>Regulations</span>
                    </div>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="disclosures" className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-indigo-800">Investment Disclosures</h3>
                  <div className="space-y-4 text-sm">
                    <p>
                      CryptoVision is a cryptocurrency trading platform that allows users to buy, sell, and manage digital assets. The services provided through CryptoVision are not regulated by traditional financial authorities in the same manner as conventional securities and banking products.
                    </p>
                    <p>
                      <strong>Investment Products • Not FDIC Insured • No Bank Guarantee • May Lose Value</strong>
                    </p>
                    <p>
                      Cryptocurrency values are highly volatile and may fluctuate significantly in short periods of time. Investments in cryptocurrency involve substantial risk and are not suitable for all investors. Past performance of a cryptocurrency is not indicative of future results. 
                    </p>
                    <p>
                      CryptoVision accounts and value balances are not insured by the Federal Deposit Insurance Corporation (FDIC) or Securities Investor Protection Corporation (SIPC). The protection mechanisms available for cryptocurrency holdings on CryptoVision are detailed in our <Link to="#" className="text-indigo-600 hover:underline">Security Measures</Link> document.
                    </p>
                    <p>
                      All financial products traded on this platform involve risk and may lose value. The price and value of cryptocurrency can rapidly increase or decrease at any time. You should consider whether you understand how cryptocurrency works and whether you can afford to take the high risk of losing your money.
                    </p>
                    <p>
                      The bonus offer of up to $500 in crypto is only valid for new CryptoVision users opening a verified account and making qualifying deposits within 60 days. See <Link to="#" className="text-indigo-600 hover:underline">Terms and Conditions</Link> for full details.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="risks" className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-indigo-800">Understanding Risk Factors</h3>
                  <div className="space-y-4 text-sm">
                    <p>
                      <strong>Market Risk:</strong> Cryptocurrency markets operate 24/7 and are subject to high volatility. Prices can change rapidly and significantly, potentially leading to substantial losses in a short period of time.
                    </p>
                    <p>
                      <strong>Technological Risk:</strong> Blockchain technology and related systems may be subject to technical failures, hacking, or other disruptions that could result in the loss of funds or access to your account.
                    </p>
                    <p>
                      <strong>Regulatory Risk:</strong> The regulatory landscape for cryptocurrencies is evolving. Changes in laws, regulations, or enforcement actions may adversely affect the value, functionality, or even legality of certain cryptocurrencies in specific jurisdictions.
                    </p>
                    <p>
                      <strong>Liquidity Risk:</strong> Some cryptocurrencies may have limited trading volume, making it difficult to execute trades at desired prices or to convert to fiat currency or other cryptocurrencies without experiencing significant price impacts.
                    </p>
                    <p>
                      <strong>Operational Risk:</strong> Errors in transaction execution, issues with digital wallets, lost private keys, or other operational failures could result in the irreversible loss of your cryptocurrency.
                    </p>
                    <p>
                      <strong>Counterparty Risk:</strong> When using exchanges, lending platforms, or engaging in smart contracts, you are exposed to the risk that the other party may default or fail to fulfill its obligations.
                    </p>
                    <p>
                      <strong>Fork and Technical Change Risk:</strong> Cryptocurrencies may undergo "forks" or technical changes in their underlying protocols that could significantly affect their value, functionality, or security.
                    </p>
                    <p>
                      CryptoVision implements various security measures to protect users' assets, including cold storage for the majority of funds, encryption of sensitive data, and regular security audits. However, no security system is completely immune to all potential threats.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="regulations" className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-indigo-800">Regulatory Framework</h3>
                  <div className="space-y-4 text-sm">
                    <p>
                      <strong>Anti-Money Laundering (AML) Compliance:</strong> CryptoVision is committed to preventing money laundering and terrorist financing. We implement robust Know Your Customer (KYC) procedures and transaction monitoring systems in accordance with applicable regulations.
                    </p>
                    <p>
                      <strong>Tax Reporting:</strong> Transactions involving cryptocurrencies may have tax implications. CryptoVision provides necessary transaction records, but it is your responsibility to report and pay any applicable taxes. CryptoVision does not provide tax advice, and you should consult with a tax professional regarding your specific situation.
                    </p>
                    <p>
                      <strong>Market Conduct Rules:</strong> We maintain and enforce policies to prevent market manipulation, insider trading, and other prohibited trading practices. All users must adhere to our <Link to="#" className="text-indigo-600 hover:underline">User Agreement</Link> and applicable laws.
                    </p>
                    <p>
                      <strong>Virtual Asset Service Provider Requirements:</strong> In jurisdictions where applicable, CryptoVision complies with local regulations governing Virtual Asset Service Providers (VASPs), including registration, licensing, and operational requirements.
                    </p>
                    <p>
                      <strong>Cross-Border Transactions:</strong> Cryptocurrency transactions may be subject to various international regulations. Users are responsible for ensuring compliance with laws in their jurisdiction before using our services.
                    </p>
                    <p>
                      <strong>Securities Laws:</strong> Some cryptocurrencies may be classified as securities in certain jurisdictions. CryptoVision reviews assets listed on our platform to minimize securities law risks, but regulatory classifications may change over time.
                    </p>
                    <p>
                      <strong>Data Protection:</strong> We adhere to applicable data protection regulations including measures similar to GDPR standards where required. See our <Link to="#" className="text-indigo-600 hover:underline">Privacy Policy</Link> for details on how we process your personal data.
                    </p>
                    <p>
                      <strong>Jurisdictional Limitations:</strong> CryptoVision services may not be available or may be restricted in certain jurisdictions due to local regulations. It is your responsibility to ensure that your use of CryptoVision complies with the laws of your jurisdiction.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-8 bg-white rounded-lg border p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-indigo-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-indigo-800">Global Regulatory Notice</h3>
                    <p className="text-sm mb-4">
                      Cryptocurrency regulations vary significantly by country and region. Users must ensure they comply with all applicable laws and regulations in their jurisdiction. CryptoVision may not be available in all regions, and certain features may be restricted based on your location.
                    </p>
                  </div>
                </div>

                <hr className="my-4 border-gray-200" />

                <div className="text-xs text-gray-500 space-y-2">
                  <p>
                    System response and account access times may vary due to a variety of factors, including trading volumes, market conditions, system performance, and other factors.
                  </p>
                  <p>
                    For information on CryptoVision's security measures and asset protection policies, please visit our <Link to="#" className="text-indigo-600 hover:underline">Security Center</Link>.
                  </p>
                  <p>
                    <Link to="#" className="text-indigo-600 hover:underline">Statement of Financial Condition</Link> | 
                    <Link to="#" className="text-indigo-600 hover:underline"> Account Protection</Link> | 
                    <Link to="#" className="text-indigo-600 hover:underline"> User Agreement</Link> | 
                    <Link to="#" className="text-indigo-600 hover:underline"> Privacy Policy</Link> | 
                    <Link to="#" className="text-indigo-600 hover:underline"> Business Continuity Plan</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Promo Banner (Bottom) */}
      <div className="bg-indigo-800 text-white text-center py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold mb-2">Get up to $500 in crypto for a limited time!</h3>
          <p className="text-sm text-gray-200 mb-4">
            Open a verified account and make qualifying deposits within 60 days. Terms apply.
          </p>
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
            <Link to="/signup">Learn More</Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-medium mb-4">About Us</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="hover:text-white">Company</Link></li>
                <li><Link to="#" className="hover:text-white">Careers</Link></li>
                <li><Link to="#" className="hover:text-white">Press Center</Link></li>
                <li><Link to="#" className="hover:text-white">Our Story</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="hover:text-white">Trading Platform</Link></li>
                <li><Link to="#" className="hover:text-white">Investment Tools</Link></li>
                <li><Link to="#" className="hover:text-white">Crypto Staking</Link></li>
                <li><Link to="#" className="hover:text-white">API Access</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Legal Info</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="hover:text-white">Terms of Service</Link></li>
                <li><Link to="#" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:text-white">Security</Link></li>
                <li><Link to="#" className="hover:text-white">Disclaimers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Connect with Us</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="hover:text-white">Contact Support</Link></li>
                <li><Link to="#" className="hover:text-white">Twitter</Link></li>
                <li><Link to="#" className="hover:text-white">Discord</Link></li>
                <li><Link to="#" className="hover:text-white">Telegram</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-10 mt-10 border-t border-gray-800 text-xs">
            <div className="flex items-center justify-center gap-1">
              <Copyright className="h-3 w-3" />
              <p>{currentYear} CryptoVision Inc. All rights reserved.</p>
            </div>
            <p className="mt-2">Cryptocurrency trading involves substantial risk and is not suitable for every investor. Make sure you understand the risks involved.</p>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
};

export default HomePage;
