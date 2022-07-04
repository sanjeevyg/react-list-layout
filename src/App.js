import RegularList from './RegularList'
import SmallPersonListItem from './people/SmallPersonListItem'
import LargePersonListItem from './people/LargePersonListItem'



const people = [{
  name: 'John Doe', 
  age: 54, 
  hairColor: 'brown',
  hobbies: ['swimming', 'bicycling', 'video games']
}, {
  name: 'Brenda Smith', 
  age: 54, 
  hairColor: 'black',
  hobbies: ['golf', 'mathematics']
}, {
  name: 'Jane Garcia', 
  age: 27, 
  hairColor: 'blonde',
  hobbies: ['biology', 'medicine', 'gymnatics']
}]


const products = [{
  name: 'Flat-Screen TV', 
  price: '$300', 
  description: 'Huge LCD screen, a great deal',
  rating: 4.5,
}, {
  name: 'Basektball', 
  price: '$10', 
  description: 'Just like the pros use',
  rating: 4.5,
}, {
  name: 'Running Shoes', 
  price: '$120', 
  description: 'State-of-the-art technology for optimum rating',
  rating: 4.2,
}]

function App() {
  return (
    <>
      <RegularList 
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList 
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
    </>
  );
}

export default App;
