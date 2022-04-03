import Card from './Card'
import './cards.css'

function Cards() {
    return (
        <div className='cards'>
          <Card title='Eco-friendly' content='No Hazardous chemicals'/>
          <Card title='Less Odor' content=' '/>
          <Card title='Great Opacity' content='Adding sparkle to your products'/>
          <Card title='Smoothness' content='That makes printing trouble free'/>
        </div>
    );
}

export default Cards