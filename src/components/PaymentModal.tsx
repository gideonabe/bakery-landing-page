
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Copy, Bitcoin, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QRCode from "qrcode.react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: {
    amount: number;
    returnRate: number;
  } | null;
}

const PaymentModal = ({ isOpen, onClose, selectedPlan }: PaymentModalProps) => {
  const [selectedCrypto, setSelectedCrypto] = useState("btc");
  const [copiedAddress, setCopiedAddress] = useState(false);
  const navigate = useNavigate();

  const cryptoData = {
    btc: {
      name: "Bitcoin",
      symbol: "BTC",
      address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      icon: Bitcoin
    },
    eth: {
      name: "Ethereum", 
      symbol: "ETH",
      address: "0x742d35Cc6634C0532925a3b8D458A38E57A14EaE",
      icon: Coins
    },
    sol: {
      name: "Solana",
      symbol: "SOL", 
      address: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
      icon: Coins
    }
  };

  const currentCrypto = cryptoData[selectedCrypto as keyof typeof cryptoData];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handlePaymentDone = () => {
    onClose();
    navigate('/signup');
  };

  if (!selectedPlan) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-indigo-800">
            Complete Your Investment
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="text-center bg-indigo-50 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              Before you continue to signup, you need to deposit{' '}
              <span className="font-bold text-indigo-600">${selectedPlan.amount}</span> into your 
              CryptoVision account to get started and earn{' '}
              <span className="font-bold text-green-600">{selectedPlan.returnRate}% profit</span> in 1 month.
            </p>
          </div>

          <Tabs value={selectedCrypto} onValueChange={setSelectedCrypto} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="btc" className="flex items-center gap-2">
                <Bitcoin className="h-4 w-4" />
                BTC
              </TabsTrigger>
              <TabsTrigger value="eth" className="flex items-center gap-2">
                <Coins className="h-4 w-4" />
                ETH
              </TabsTrigger>
              <TabsTrigger value="sol" className="flex items-center gap-2">
                <Coins className="h-4 w-4" />
                SOL
              </TabsTrigger>
            </TabsList>

            <div className="mt-6 space-y-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Send {currentCrypto.symbol} to this address:
                </h3>
                
                <div className="bg-white rounded-lg p-4 border-2 border-dashed border-indigo-300">
                  <QRCode 
                    value={currentCrypto.address} 
                    size={200}
                    className="mx-auto mb-4"
                  />
                  
                  <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                    <code className="flex-1 text-xs break-all text-gray-700">
                      {currentCrypto.address}
                    </code>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(currentCrypto.address)}
                      className="shrink-0"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {copiedAddress && (
                    <p className="text-green-600 text-sm mt-2">Address copied!</p>
                  )}
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-xs text-yellow-800">
                  ⚠️ Only send {currentCrypto.symbol} to this address. Sending other cryptocurrencies may result in permanent loss of funds.
                </p>
              </div>

              <Button 
                onClick={handlePaymentDone}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                size="lg"
              >
                Payment Done - Continue to Signup
              </Button>
            </div>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
