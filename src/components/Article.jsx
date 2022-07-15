import { Btn } from "./Btn"
import { Content } from "./Content"
import { Image } from "./Image"
import { RoundedGroup } from "./RoundedGroup"
import { Tags } from "./Tags"
import {toast} from 'react-hot-toast'

export const Article = ({data}) => {
  const shareData = {
    title: 'Test Assignment',
    text: 'just a test',
    url: window.location.href
  }
  const share = async() => {
    try {
      await navigator.share(shareData)
      toast('Yey you want to share me thanks',
        {
          icon: '❤️',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
    } catch(err) {
      toast('failed to share',
      {
        icon: '💔',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
    }
  }
  return (
    <>
        <h1 className="title mb">{data.title}</h1>

        <Tags tags={data.tags} />

        <Image image={data.image} />

        <div className="flex justify-between align-center mb-2">
          <div className="flex align-center gap">
              <span className="material-icons">schedule</span>
              <div className="time">{data.datetime}</div>
          </div>
          <div className="flex align-center gap">
            <RoundedGroup>
              <Btn onClick={share} className={"flex align-center gap"}>
                <span className="material-icons">share</span> share
              </Btn>
            </RoundedGroup>
            <RoundedGroup>
              <Btn className={"flex align-center gap"}>
                <span className="material-icons-outlined">article</span> Enable reading mode
              </Btn>
              <Btn>A-</Btn>
              <Btn>A</Btn>
              <Btn>A+</Btn>
            </RoundedGroup>
          </div>
        </div>

        <div className="articles">
          {
            data.content.map(text=>{
              return <Content key={text} text={text} />
            })
          }
        </div>

    </>
  )
}
