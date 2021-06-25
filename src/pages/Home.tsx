import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';

function Home() {
  const history = useHistory();
  const { user, SignInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await SignInWithGoogle();
    }

    history.push('/rooms/new');
  }

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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleImg} alt="Google logo" />
            Create your room with Google
          </button>
          <div className="separator">or enter a room</div>
          <form>
            <input
              type="text"
              placeholder="Enter the room code"
              name=""
              id=""
            />
            <Button type="submit">
              Enter the room
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}

export { Home }
