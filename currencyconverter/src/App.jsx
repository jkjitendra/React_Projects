  import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components/index'

  function App() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)

    const swap = () => {
      setFrom(to)
      setTo(from)
      setConvertedAmount(amount)
      setAmount(convertedAmount)
    }

    const convert = () => {
      setConvertedAmount(amount * currencyInfo[to])
    }

    return (
      <>
      <div className="w-full h-screen flex flex-wrap bg-cover bg-no-repeat"
        style={{backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/021/433/252/non_2x/stock-chart-that-is-said-to-be-showing-progressive-growth-of-the-company-increasing-revenues-of-the-company-and-expanding-into-different-countries-dark-blue-background-and-grid-lines-vector.jpg)`}}
      >
        <div className="w-full pb-16">
          <h1
            className="text-5xl"
            style={{
              color: '#2CE0FD',
            }}
          >Currency Converter App</h1>
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30"
            style={{marginTop: '20rem'}}
          >
            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>
              <div className="w-full mb-1">
                <InputBox 
                  label="from"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  className='absolute  left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-700 text-white px-2 py-0.5'
                  onClick={swap}
                >Swap</button>
              </div>
              <div className="w-full mb-1">
                <InputBox 
                  label="to"
                  amount={convertedAmount}
                  amountDisabled
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={to}
                />
              </div>
              <button
                type='submit'
                className='w-full text-white px-4 py-3 rounded-lg bg-blue-600 focus-visible:ring'
              >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
          </div>
        </div>
      </div>

      </>
    )
  }

  export default App
