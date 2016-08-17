import test from 'ava'
import postxml from 'postxml'
import plugins from './index'

test('load config', t => {
	postxml(plugins)
		.process('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Document</title></head><body></body></html>')
	t.pass()
})
