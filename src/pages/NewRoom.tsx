import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
// import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

function NewRoom() {
  // const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="illustration for Q&amp;A" />
        <strong>Create Live Q&amp;A rooms</strong>
        <p>Ask your audience's questions in real time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask logo" />
          <h2>Create a new room</h2>
          <form>
            <input
              type="text"
              placeholder="Room name"
              name=""
              id=""
            />
            <Button type="submit">
              Create room
            </Button>
            <p>
              Do you want to enter an existing room? <Link to="/">Click here</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  )
}

export { NewRoom }
