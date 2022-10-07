import { AiFillFolder } from 'react-icons/ai'

const typeOfFile = [
  {
    type: 'file',
    badge: 'Config',
    title: 'dataform',
  },
  {
    type: 'file',
    badge: 'Config',
    title: 'package-lock',
  },
  {
    type: 'file',
    badge: 'Config',
    title: 'package',
  },
  {
    type: 'folder',
    folder: AiFillFolder,
    title: 'models',
    files: [
      {
        type: 'folder',
        folder: AiFillFolder,
        title: '1_simple_examples',
        files: [
          {
            type: 'file',
            badge: 'SQL',
            title: 'dataset_1',
          },
          {
            type: 'file',
            badge: 'SQL',
            title: 'dataset_2_with_ref',
          },
        ],
      },
      {
        type: 'folder',
        folder: AiFillFolder,
        title: '2_advance_examples',
        files: [
          {
            type: 'file',
            badge: 'SQL',
            title: 'dataset_3_increase',
          },
          {
            type: 'file',
            badge: 'JS',
            title: 'dataset_4_increase',
          },
        ],
      },
      {
        type: 'folder',
        folder: AiFillFolder,
        title: '3_operations_and_assertions',
        files: [
          {
            type: 'file',
            badge: 'ops',
            title: 'grand_access',
          },
          {
            type: 'file',
            badge: 'assert',
            title: 'simple_assertion',
          },
        ],
      },
    ],
  },
  {
    type: 'folder',
    folder: AiFillFolder,
    title: 'models_2',
  },
]

export default typeOfFile
