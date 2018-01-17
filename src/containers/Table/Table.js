import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableRow from '../../components/TableRow/TableRow';

class Table extends Component {

  renderNilai = () => {
    
  }

  render() {
    const table = this.props.quizes.map(quiz => <TableRow
        key={quiz.id}
        dateCreated={quiz.created_at}
        quizTitle={quiz.quiz_title}
        nilai={quiz.value}
      />
    )
    return (      
      <table className="collapse w-100 mw-80-ns tc helvetica">
        <tbody>
          <tr className="blue bb b--black-20">
            <td className="tc b pv2">Date</td>
            <td className="tc b pv2">Quiz Title</td>
            <td className="tc b pv2">Score</td>
          </tr>
          {table}
        </tbody>
      </table>
    );    
  }
}

const mapStateToProps = state => {
  return {
    quizes: state.user.quizes
  }
}

export default connect(mapStateToProps)(Table);