import Question from '../question/questionModel';

let api = {
  getAllQuestions: function(req, res) {
    Question.find({}).sort({index: 1}).exec(
      function(err, data) {
        if(err) throw err;
        else {
          res.status(200).send(data);
        }
      }
    );
  }
};

export default api;
