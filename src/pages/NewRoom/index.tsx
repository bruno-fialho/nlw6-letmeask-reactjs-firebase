import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import { Button } from '../../components/Button';

import './styles.scss';

function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {return}

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
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
          <h2>Create a new room</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Room name"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
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
