import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./App.css";
import image from "./image.jpg";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [
        {
          FullName: "Emna Mezni",
          profession: " Hello ! I'm studying to become a Full Stack Developer",
        },
      ],
      isShow: false,
      counter: 0,
    };
  }

  showProfile = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }
  displayTime=(timeSec)=>{
    let h=Math.floor(timeSec/3600)
    let m=Math.floor((timeSec-(h*3600))/60)
    let s=timeSec-((h*3600)+m*60)
    return <div>
      <span>{String(h).padStart(2,0)}:{String(m).padStart(2,0)}:{String(s).padStart(2,0)}</span>
    </div>
  }

  render() {

    return (
      <div className="profile">
        <div>
          <h6>{this.displayTime(this.state.counter)}</h6>
        </div>
        <Button variant="outline-primary" onClick={this.showProfile}>
          {this.state.isShow?'Hide Profile':'Show Profile'}
        </Button>
        {this.state.isShow ? (
          <div>
            {this.state.profile.map((el, index) => (
              <Card className="card" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} style={{ width: "100%" }} />
                <Card.Body>
                  <Card.Title className="title">{el.FullName}</Card.Title>
                  <Card.Text className="text">
                    {el.bio}
                    {el.profession}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        ) : (
        ""
        )}
      </div>
    );
  }
}

export default App;
