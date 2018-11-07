import Snapshot from './getSnapshotBeforeUpdate'
import Todolist from './todolist'
import TestRefs from './test_refs'
export default [
  {
    path: '/snapshot',
    component: Snapshot
  },
  {
    path: '/todolist',
    component: Todolist
  },
  {
    path: '/test_refs',
    component: TestRefs
  }
]