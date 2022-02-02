const data = [
  {
    start: 0,
    duration: 300, // number / 60
    content: [
      {
        type: 'translate_x_from_left_to_right',
        customStyle: {
          marginTop: -960
        },
        text: 'Olá Mundo!!!'
      },
  
      {
        type: 'translate_x_from_right_to_left',
        customStyle: {
          marginTop: 960
        },
        text: 'Hello World!!'
      },
  
      {
        type: 'typewriter',
        customStyle: {
          fontSize: 60,
          color: '#A5F',
          textAlign: 'center',
        },
        text: 'I am a TypeWriter',
      },
    ]
  },

  {
    start: 300,
    duration: 300, // number / 60
    content: [
      {
        type: 'translate_x_from_left_to_right',
        customStyle: {
          marginTop: -960
        },
        text: 'Olá Mundo 2!!!'
      },
  
      {
        type: 'translate_x_from_right_to_left',
        customStyle: {
          marginTop: 960
        },
        text: 'Hello World 2!!'
      },
  
      {
        type: 'typewriter',
        customStyle: {
          fontSize: 60,
          color: '#A5F',
          textAlign: 'center',
        },
        text: 'I am a TypeWriter 2',
      },
    ]
  },

  {
    start: 600,
    duration: 600, // number / 60
    content: [
      {
        type: 'translate_x_from_left_to_right',
        customStyle: {
          marginTop: -960
        },
        text: 'A Memel é favorita!!!'
      },
  
      {
        type: 'translate_x_from_right_to_left',
        customStyle: {
          marginTop: 960
        },
        text: 'A Kiki é miau miga!!'
      },
  
      {
        type: 'typewriter',
        customStyle: {
          fontSize: 60,
          color: '#A5F',
          textAlign: 'center',
        },
        text: 'A bolinha é baleiudinha <3',
      },
    ]
  },
  
]

export default data