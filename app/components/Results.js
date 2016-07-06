var React = require('react');
var PropTypes = React.PropTypes;

function puke (object) {
	console.log(object)
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function Results (props) {
	return (
			<div>
				Results: {puke(props)}
			</div>
		)
}

Results.PropTypes = {
	isLoading: PropTypes.bool.isRequired,
	scores: PropTypes.array.isRequired,
	playersInfo: PropTypes.array.isRequired
}

module.exports = Results;