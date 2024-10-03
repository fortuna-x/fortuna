import Carousel from 'react-bootstrap/Carousel';
import assImg from './assets/Ass.png';
import bodyImg from './assets/Body.jpg';
import doggyImg from './assets/Doggy.jpg';
import cockImg from './assets/Cock1.jpg';
import balaclavaImg from './assets/Balaclava.png';
import fortunaLogo from './assets/Fortuna.svg';
import { useState, ChangeEvent } from 'react';
import './App.css';

function App() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const prices = {
    handJob: 10,
    blowJobCondom: 25,
    blowJobNoCondom: 35,
    analTopCondom: 50,
    analTopNoCondom: 75,
    analBottomCondom: 100,
    analBottomNoCondom: 150,
  };

  const handleServiceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedServices((prev) => [...prev, value]);

      if (value === 'handJob') {
        setSelectedServices((prev) =>
          prev.filter((service) => service !== 'blowJobNoCondom' && service !== 'blowJobCondom')
        );
      }

      if (value === 'blowJobNoCondom') {
        setSelectedServices((prev) =>
          prev.filter((service) => service !== 'blowJobCondom' && service !== 'handJob')
        );
      }

      if (value === 'blowJobCondom') {
        setSelectedServices((prev) =>
          prev.filter((service) => service !== 'blowJobNoCondom' && service !== 'handJob')
        );
      }

      if (value === 'analTopNoCondom') {
        setSelectedServices((prev) =>
          prev.filter((service) => service !== 'analTopCondom')
        );
      }

      if (value === 'analTopCondom') {
        setSelectedServices((prev) =>
          prev.filter((service) => service !== 'analTopNoCondom')
        );
      }

      if (value === 'analBottomNoCondom') {
        setSelectedServices((prev) =>
          prev.filter((service) => service !== 'analBottomCondom')
        );
      }

      if (value === 'analBottomCondom') {
        setSelectedServices((prev) =>
          prev.filter((service) => service !== 'analBottomNoCondom')
        );
      }
    } else {
      setSelectedServices((prev) => prev.filter((service) => service !== value));
    }
  };

  const handlePeopleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumberOfPeople(parseInt(event.target.value, 10));
  };

  const calculateTotal = () => {
    const basePrice = selectedServices.reduce((total, service) => total + prices[service as keyof typeof prices], 0);
    const extraCost = (numberOfPeople - 1) * 50;
    return basePrice + extraCost;
  };

  return (
    <main>
      <section className="pt-5 mb-3">
        <div className="d-flex justify-content-center">
          <h1>+44 7537 184372</h1>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <h5>Text Only - Calls Ignored!</h5>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <p><em>Repeated calls will result in your number being blocked.</em></p>
        </div>
      </section>
      <section>
        <div className="d-flex justify-content-center">
          <img alt="fortuna" src={fortunaLogo} width={300} height={300} />
          <Carousel slide={false}>
            <Carousel.Item interval={2000}>
              <img src={assImg} width={300} height={300} alt="Ass" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img src={bodyImg} width={300} height={300} alt="Body" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img src={doggyImg} width={300} height={300} alt="Doggy" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img src={cockImg} width={300} height={300} alt="Cock" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img src={balaclavaImg} width={300} height={300} alt="Balaclava" />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      <section className="mt-5">
        <div className="ms-5 me-5 ps-5 pe-5 d-flex justify-content-center">
          <p>Hello, there! I&apos;m Fortuna, the balaclava escort. I am a young, bisexual escort who specialises in giving sexual pleasure under the mask of a balaclava, allowing both extroverts <em>and</em> introverts to experience my body. I needn&apos;t brag about or explain my body; you can see it yourself in my pictures &lt;3</p>
        </div>
      </section>

      <section className="price-calculator-section">
        <div className="price-list">
          <div className="mb-4">
            <h1>💎 Pricing</h1>
          </div>
          <ul>
            <li><span className="span-cost">£10.00</span><span className="span-item">1 Hand Job</span><span className="span-unprot">w/o Condom</span><span className="span-time">Quickie</span></li>
            <li><span className="span-cost">£25.00</span><span className="span-item">1 Blow Job</span><span className="span-prot">w/ Condom</span><span className="span-time">Quickie</span></li>
            <li><span className="span-cost">£35.00</span><span className="span-item">1 Blow Job</span><span className="span-unprot">w/o Condom</span><span className="span-time">Quickie</span></li>
            <li><span className="span-cost">£50.00</span><span className="span-item">Anal (Top)</span><span className="span-prot">w/ Condom</span><span className="span-time">30 Mins</span></li>
            <li><span className="span-cost">£75.00</span><span className="span-item">Anal (Top)</span><span className="span-unprot">w/o Condom</span><span className="span-time">30 Mins</span></li>
            <li><span className="span-cost">£100.00</span><span className="span-item">Anal (Bottom)</span><span className="span-prot">w/ Condom</span><span className="span-time">60 Mins</span></li>
            <li><span className="span-cost">£150.00</span><span className="span-item">Anal (Bottom)</span><span className="span-unprot">w/o Condom</span><span className="span-time">60 Mins</span></li>
          </ul>
        </div>
        <div className="price-calculator">
          <div className="mb-4">
            <h1>💸 Price Calculator</h1>
          </div>
          <form>
            <div className="mb-3">
              <label>Select Services:</label>
              <div>
                <input
                  type="checkbox"
                  value="handJob"
                  onChange={handleServiceChange}
                  checked={selectedServices.includes('handJob')}
                  disabled={selectedServices.includes('blowJobCondom') || selectedServices.includes('blowJobNoCondom')}
                />
                ⠀Hand Job - £10.00
              </div>
              <div>
                <input
                  type="checkbox"
                  value="blowJobCondom"
                  onChange={handleServiceChange}
                  checked={selectedServices.includes('blowJobCondom')}
                  disabled={selectedServices.includes('blowJobNoCondom') || selectedServices.includes('handJob')}
                />
                ⠀Blow Job (w/ Condom) - £25.00
              </div>
              <div>
                <input
                  type="checkbox"
                  value="blowJobNoCondom"
                  onChange={handleServiceChange}
                  checked={selectedServices.includes('blowJobNoCondom')}
                  disabled={selectedServices.includes('blowJobCondom') || selectedServices.includes('handJob')}
                />
                ⠀Blow Job (w/o Condom) - £35.00
              </div>
              <div>
                <input
                  type="checkbox"
                  value="analTopCondom"
                  onChange={handleServiceChange}
                  checked={selectedServices.includes('analTopCondom')}
                  disabled={selectedServices.includes('analTopNoCondom')}
                />
                ⠀Anal (Top w/ Condom) - £50.00
              </div>
              <div>
                <input
                  type="checkbox"
                  value="analTopNoCondom"
                  onChange={handleServiceChange}
                  checked={selectedServices.includes('analTopNoCondom')}
                  disabled={selectedServices.includes('analTopCondom')}
                />
                ⠀Anal (Top w/o Condom) - £75.00
              </div>
              <div>
                <input
                  type="checkbox"
                  value="analBottomCondom"
                  onChange={handleServiceChange}
                  checked={selectedServices.includes('analBottomCondom')}
                  disabled={selectedServices.includes('analBottomNoCondom')}
                />
                ⠀Anal (Bottom w/ Condom) - £100.00
              </div>
              <div>
                <input
                  type="checkbox"
                  value="analBottomNoCondom"
                  onChange={handleServiceChange}
                  checked={selectedServices.includes('analBottomNoCondom')}
                  disabled={selectedServices.includes('analBottomCondom')}
                />
                ⠀Anal (Bottom w/o Condom) - £150.00
              </div>
            </div>
            <div className="mb-3">
              <label>Number of People:</label>
              <input
                type="number"
                value={numberOfPeople}
                onChange={handlePeopleChange}
                className="form-control"
                min="1"
              />
            </div>
            <div className="mt-3">
              <h2>Total Price: £{calculateTotal().toFixed(2)}</h2>
            </div>
          </form>
        </div>
      </section>
      <section>
        <div className="ps-5 pe-5">
          <p><em>* For multiple people, the prices above serve as a base price for all individuals involved. From there, an additional £50.00 charge for each extra individual. For example, three people wanting to fuck me without a condom would be the base price of £150.00, plus £100.00 for the extra two people, totalling £250.00.</em></p>
        </div>
        <div className="ps-5 pe-5">
          <p><em>* There is an additional travel charge for any travel beyond one kilometer - this is just paying for an Uber (to and return); I do not receive this cost!</em></p>
        </div>
      </section>
      <section className="ps-4 pe-4 mt-5">
        <div className="mb-3">
          <h1>⚠️ What I won&apos;t offer!</h1>
        </div>
        <div>
          <ul>
            <li>
              Scat/Watersports/Other-Crazy-Shit
            </li>
            <li>
              Roleplay
            </li>
            <li>
              Extreme BDSM/Humiliation (If you are a familiar client, I may let you tie me up or fully blindfold me at a £50.00 additional cost.)
            </li>
            <li>
              Kissing/Massage/Other-Sensual-Shit
            </li>
          </ul>
        </div>
        <div>
          <p><em>* If you would like to do something that does not appear in my prices or wonts list, let me know and I&apos;ll decide whether I am comfortable doing it and for what additional cost, if any.</em></p>
        </div>
      </section>
    </main>
  );
}

export default App;
