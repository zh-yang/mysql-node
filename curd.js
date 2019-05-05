
var UserSQL = {
	insert: 'INSERT INTO stickyNotes(content, uname) VALUES(?,?)',
	delete: 'DELETE FROM stickyNotes WHERE id = ?',
	update: 'UPDATE stickyNotes SET content = ? WHERE id = ?',
	queryAll: 'SELECT * FROM stickyNotes'
}

module.exports = UserSQL
