import React, { useState, useEffect } from "react";
import ReactSelect from "react-select";

const Home = (props) => {
  const [message, setMessage] = useState("");

  const footballTeams = useSelector(state => state.footballTeams);
  const dispatch = useDispatch();

  useEffect(() => {
  }, []);

  const getFootballMatch = id => {

  };

  useEffect(() => {
    getFootballMatch(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentFootballMatch({ ...currentFootballMatch, [name]: value });
  };

  const updateStatus = status => {
    const data = {
      id: currentFootballMatch.id,
      teams: currentFootballMatch.teams,
      result: currentFootballMatch.result,
      published: status
    };

    dispatch(updateFootballMatch(currentFootballMatch.id, data))
      .then(response => {
        console.log(response);

        setCurrentFootballMatch({ ...currentFootballMatch, published: status });
        setMessage("The status was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeFootballMatch = () => {
    dispatch(deleteFootballMatch(currentFootballMatch.id))
      .then(() => {
        props.history.push("/footballMatchs");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const setTeam = (e, i) => {
    const data = currentFootballMatch;
    currentFootballMatch.teams[i] = e;
    setCurrentFootballMatch(data);
  }

  return (
    <div>
      {currentFootballMatch ? (
        <div className="edit-form">
          <h4>Football Match</h4>
          <form>

          <div className="form-group">
            <label htmlFor="teamId1">Team</label>
            <ReactSelect
              class="form-select form-select-lg mb-3" 
              aria-label="Default select example"
                value={footballTeams.id}
                getOptionLabel={option => option.name}
                onChange={option => setTeam(option)}
                options={footballTeams}
                styles={{
                    menu: (provided) => ({ ...provided, zIndex: 9999 })
                }}
            />
            </div>

            <div>
                Vs
            </div>

            <div className="form-group">
            <label htmlFor="teamId2">Team</label>
            <ReactSelect
              class="form-select form-select-lg mb-3" 
              aria-label="Default select example"
                value={footballTeams.id}
                getOptionLabel={option => option.name}
                onChange={option => setTeam(option)}
                options={footballTeams}
                styles={{
                    menu: (provided) => ({ ...provided, zIndex: 9999 })
                }}
            />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentFootballMatch.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentFootballMatch.published ? (
            <button
              className="m-3 btn btn-sm btn-success"
              onClick={() => updateStatus(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="m-3 btn btn-sm btn-success"
              onClick={() => updateStatus(true)}
            >
              Publish
            </button>
          )}

          <button className="m-3 btn btn-sm btn-danger" onClick={removeFootballMatch}>
            Delete
          </button>

          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Football Match...</p>
        </div>
      )}
    </div>
  );
};

export default Home;
