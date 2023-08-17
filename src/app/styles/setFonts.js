import localFont from 'next/font/local'


// const youTubeFont = localFont({ src:[
//   {
//     path: './YTFont.ttf',
//     weight: '900',
//     style: 'normal',
//     display: 'optional',
//     variable: 'YTfont'
//   }
// ]
//  })

 const youTubeDark = localFont({ src:[
  {
    path: './YouTubeSansDarkBlack.otf',
    variable: '--YTDark-Black',
    display: 'swap',
    // weight: '900',
    // fallback: ['system-ui', 'arial']
    // style: 'normal',
  }
]
})
// console.log(youTubeDark.variable)

 const youTubeSans = localFont({
   src:[
  {
    path: '/YouTubeSansBlack.otf',
    weight: '200',
    style: 'normal',
  },
  {
    path: '/YouTubeSansBold.otf',
    weight: '400',
    style: 'normal',
    variable: '--YTbold'
  }
]
 })


export { youTubeDark, youTubeSans };

