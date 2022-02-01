import React from 'react'
import { Card } from 'react-bootstrap'
import SkillElement from './SkillElement'
import {
  SiCsharp,
  SiJavascript,
  SiPython,
  SiCss3,
  SiHtml5,
} from 'react-icons/si'
import { FaBootstrap, FaReact } from 'react-icons/fa'
import { AiOutlineConsoleSql, AiFillGithub, AiFillGitlab } from 'react-icons/ai'
import './SkillsCard.css'
const SkillsCard = () => {
  return (
    <>
      <Card style={{ borderRadius: '15px' }} className="shadow-lg p-3 mb-5">
        <Card.Title className="text-center">
          <p className="h2">SKILSS</p>
        </Card.Title>

        <Card.Body className="d-flex justify-content-center flex-wrap">
          <div
            className="m-4 text-center col-md-2"
            id="items"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="flipper">
              <SkillElement icon={<FaBootstrap />} />
              <p className="lead">
                <strong>Boostrap</strong>
              </p>
            </div>
          </div>

          <div
            className="m-4 text-center col-md-2"
            id="items"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="flipper">
              <SkillElement icon={<SiCsharp />} />
              <p className="lead">
                <strong>C#</strong>
              </p>
            </div>
          </div>

          <div
            className="m-4 text-center col-md-2"
            id="items"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="flipper">
              <SkillElement icon={<AiFillGitlab />} />
              <p className="lead">
                <strong>Gitlab</strong>
              </p>
            </div>
          </div>

          <div
            className="m-4 text-center col-md-2"
            id="items"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="flipper">
              <SkillElement icon={<AiOutlineConsoleSql />} />
              <p className="lead">
                <strong>SQL Server</strong>
              </p>
            </div>
          </div>

          <div
            className="m-4 text-center col-md-2"
            id="items"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="flipper">
              <SkillElement icon={<SiJavascript />} />
              <p className="lead">
                <strong>JavaScript</strong>
              </p>
            </div>
          </div>

          <div
            className="m-4 text-center col-md-2"
            id="items"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="flipper">
              <SkillElement icon={<SiPython />} />
              <p className="lead">
                <strong>Python</strong>
              </p>
            </div>
          </div>

          <div
            className="m-4 text-center col-md-2"
            id="items"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="flipper">
              <SkillElement icon={<SiCss3 />} />
              <p className="lead">
                <strong>CSS</strong>
              </p>
            </div>
          </div>

          <div
            className="m-4 text-center col-md-2"
            id="items"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="flipper">
              <SkillElement icon={<SiHtml5 />} />
              <p className="lead">
                <strong>HTML</strong>
              </p>
            </div>
          </div>

          <div
            className="m-4 text-center col-md-2"
            id="items"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="flipper">
              <SkillElement icon={<AiFillGithub />} />
              <p className="lead">
                <strong>GitHub</strong>
              </p>
            </div>
          </div>

          <div
            className="m-4 text-center col-md-2"
            id="items"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="flipper">
              <SkillElement icon={<FaReact />} />
              <p className="lead">
                <strong>React Js</strong>
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default SkillsCard
