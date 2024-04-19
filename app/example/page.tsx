"use client"
import { SendTransactionSection } from "@/components/dashboard/TransactionTest"
import { useDynamicContext } from "@/lib/dynamic"
import { useBalance } from "wagmi"

export default function Home() {

    const { primaryWallet } = useDynamicContext()
    //@ts-ignore
    const signMessage = async () => {
        // console.log('Signing message for primary account', primaryWallet)
        const signer = await primaryWallet?.connector.ethers?.getSigner()
        const signature = await signer.signMessage('Hello world')
        console.log('Signature', signature)
    }
    return (
        <div>
            <h1>This is example page</h1>
            <button onClick={signMessage} className="border border-black px-4 py-2 rounded">Sign Message</button>
            <SendTransactionSection />
        </div>
    )
}