// Импортим todo из компонентов
import Todo from './components/todo';

// созд функицию App которая возвращает разметку "абзац" и компонент "todo" с свойством текст "Learn React "
function App() {
  return (
    <div>
      <h1>My todos</h1>
      <Todo text='Learn React' />
    </div>
  )
}
// експортим по умолчанию компонент "App"
export default App;