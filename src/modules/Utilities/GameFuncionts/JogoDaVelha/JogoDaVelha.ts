export function RenderJogoDaVelha(positions: string[]) {
    const [A,B,C,D,E,F,G,H,I] = positions
    return (`
       ${A} | ${B} | ${C} 
     ___|__|___   
       ${D} | ${E} | ${F} 
     ___|__|___
          |    |   
       ${G} | ${H} | ${I}  `)
}
