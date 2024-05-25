const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

/* HTTP Cloud Function.
*
* @param {Object} req Cloud Function request context.
* @param {Object} res Cloud Function response context.
*/
exports.helloGET = (req, res) => {
  res.send('Hello from Cloud Functions and Cloud Source Repositories');
};


exports.subscriptions = async (req, res) => {
  initializeApp();

  const db = getFirestore();

  const snapshot = await db.collection('subscriptions').get();
  // snapshot.forEach((doc) => {
  //   console.log(doc.id, '=>', doc.data());
  // });


  res.send( snapshot.docs.map(doc => doc.data()) );
} 

// Listagem de cursos
  // cursos que não estou isncrito
  // cursos que estou inscrito
// Inscrição no curso
// Upload do comprovante de pgto
// Criação da credencial [certificado]

// Profile: ALuno ou Professor
// Curso
// Matricula
// Turma

// Matricula
  // id
  // curso_id
  // profile_id

// Turma Model
  // id
  // list de matriculas
  // professor_id