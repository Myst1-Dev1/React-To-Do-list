import * as C from './styles/style';
import { FormEvent, useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Item } from './Types/item';


function App() {
  const [item, setItem] = useState<Item[]>(() => {
    return JSON.parse(localStorage.getItem('item') || '[]') || []
  });
  const [addItem, setAddItem] = useState('');

  function handleSubmit(e:FormEvent) {
    e.preventDefault();

    const newItem: Item = {
      id: item.length + 1,
      name: addItem,
    }

    setItem([...item, newItem]);

    setAddItem('');
  }

  function handleDeleteItem(id:number) {
   const removeItem = item.filter(item => item.id !== id);

   setItem(removeItem);

  }

  function handleCleanList() {
    setItem([]);
  }

  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(item));
  }, [item]);

  return (
    <C.Container>
      <C.Title>
        <h1>To do List</h1>
      </C.Title>

      <C.ToDoContent>
        <C.InputBox onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='digite o nome do item'
            value={addItem}
            onChange={e => setAddItem(e.target.value)} 
          />
          <button type='submit'>+ Adicionar item</button>
        </C.InputBox>

        <C.itemContainer>
          {item.map(item => {
            return (
              <C.itemContent key={item.id}>
                <div className='check-box'>
                  <input type="checkbox" />
                  <label>{item.name}</label>
                </div>
                <div className="icons">
                  <FaTrashAlt onClick={() => handleDeleteItem(item.id)} className='trash' />
                </div>
              </C.itemContent>
            )
          })}
        </C.itemContainer>

        <C.cleanItems>
          <p onClick={handleCleanList}>Limpar</p>
        </C.cleanItems>

      </C.ToDoContent>
    </C.Container>
  );
}

export default App;
