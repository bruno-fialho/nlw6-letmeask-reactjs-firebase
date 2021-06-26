import { useHistory, useParams } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';

// import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';

import './styles.scss';
import { database } from '../../services/firebase';

type RoomParams = {
  id: string;
}

function AdminRoom() {
  // const { user } = useAuth();
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { title, questions } = useRoom(roomId);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    });

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Are you sure you want to delete this question?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>Close room</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Room {title}</h1>
          { questions.length > 0 && (
            <span>{questions.length} question{ questions.length > 1 && 's'}</span>
          ) }
        </div>

        <div className="question-list">
          { questions.map(question => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remove question" />
                </button>
              </Question>
            )
          }) }
        </div>
      </main>
    </div>
  )
}

export { AdminRoom }