let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

function createDomain() {
	let listDomain = [];
	let domain= '', aux='', aux2='';

	pronoun.forEach(p => {
		domain+=p;
		adj.forEach(a => {
			aux=domain;
			aux+=a;
			noun.forEach(n => {
				aux2=aux; 
				aux2+=`${n}.com`;
				listDomain.push(aux2);
			})
			aux2='';
		})
		domain='';
	});
	return listDomain;

	// for(let i=0;i<pronoun.length;i++) {
	// 	domain+=pronoun[i]; 
	// 	for(let j=0;j<adj.length;j++) {
	// 		aux=domain; 
	// 		aux+=adj[j]; 
	// 		for(let k=0;k<noun.length;k++) {
	// 			aux2=aux; 
	// 			aux2+=`${noun[k]}.com`;
	// 			listDomain.push(aux2);
	// 		}
	// 		aux2='';
	// 	}
	// 	domain='';
	// }
}

console.log(createDomain())

// 	p1  a1  n1
// thegreatjogger.com
// 	p1  a1  n2
// thegreatracoon.com
// 	p2  a1  n1
// ourgreatjogger.com
// 	p2  a1  n2 
// ourgreatracoon.com
// 	p1  a2  n1
// thebigjogger.com
//  p1  a2  n2
// thebigracoon.com
// 	p2  a2  n1
// ourbigjogger.com
// 	p2  a2  n2
// ourbigracoon.com




