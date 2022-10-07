/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsQuestionCircle } from 'react-icons/bs'
import { HiOutlineDocumentSearch } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import { MdOutlineRefresh, MdOutlineSchema } from 'react-icons/md'
import { TiDeleteOutline } from 'react-icons/ti'

import { Badge, BoxFlex, ControlledAccordions, CustomButton, Tab } from '../../components'
import { useFocusPage } from '../../hooks'
import content, { folder, folder2 } from './constant'

const index = () => {
  const [results, setResults] = useFocusPage('schema')
  const [docs, setDocs] = useFocusPage('outline')
  const [value, setValue] = useFocusPage('')
  const [query, setQuery] = useFocusPage('run')

  return (
    <BoxFlex>
      {/* file title */}
      <BoxFlex row justifyContent="space-between" bgcolor="#2d3a46" padding=".8rem 2rem" borderBottom="1px solid #fff3">
        <Typography variant="h6" color="initial">
          definitions/1_simple_examples/dataset_2_with_ref.sql
        </Typography>
        <Button variant="contained" color="secondary">
          <span style={{ fontWeight: 'bold' }}>Save</span>
        </Button>
      </BoxFlex>

      {/* medile section */}
      <BoxFlex row bgcolor="#2d3a46">
        {/* code pre content */}
        <Box padding="1rem 2rem" fontWeight="bold" flex={5}>
          <pre>
            {content.map((item: string, idx: number) => (
              <Box key={idx} display="flex" flexDirection="row" height="1.4rem">
                <Box width="4rem">{idx + 1}</Box> <Typography variant="body1">{item}</Typography>
              </Box>
            ))}
          </pre>
        </Box>

        {/* docs section */}
        <Box flex={2} border="1px solid #fff3">
          <BoxFlex row flex={1} justifyContent="center">
            <Tab
              label="Outline"
              onClick={() => setDocs('outline')}
              color={docs == 'outline' ? 'textPrimary' : 'textSecondary'}
              borderBottom={docs == 'outline' && '2px solid white'}
              flex={1}
            />
            <Tab
              label="Documentation"
              onClick={() => setDocs('documentation')}
              color={docs == 'documentation' ? 'textPrimary' : 'textSecondary'}
              borderBottom={docs == 'documentation' && '2px solid #fff'}
              flex={1}
            />
          </BoxFlex>

          <Box>
            {/* warning alert */}
            <BoxFlex row alignItems="center" padding=".4rem">
              <BsQuestionCircle color="#af9e62" />
              <Typography
                variant="caption"
                style={{ color: '#af9e62', fontWeight: 'bolder', fontSize: '.9rem', marginLeft: '.5rem' }}
              >
                No compalition issue
              </Typography>
            </BoxFlex>

            {/* file name */}
            <BoxFlex>
              <CustomButton
                label="dataset_2_with_ref"
                badge="table"
                badgeColor="#538d99"
                EndIcon={BiDotsHorizontalRounded}
              />
              {/* Dependencies */}
              <CustomButton label="Dependencies" alert="3" EndIcon={IoIosArrowDown} borderTop={'1px solid #fff3'} />
            </BoxFlex>

            {/* Compiled */}
            <CustomButton label="Compiled" EndIcon={IoIosArrowDown} borderTop={'1px solid #fff3'} />

            {/* Query */}
            <CustomButton label="Query" EndIcon={IoIosArrowDown} borderTop={'1px solid #fff3'} />

            <BoxFlex row justifyContent={'space-around'} marginTop=".3rem">
              <Button
                onClick={() => setQuery('execute')}
                variant="contained"
                color={query == 'execute' ? 'primary' : 'secondary'}
                style={{ padding: '.6rem .5rem', fontSize: '.8rem' }}
              >
                Execute query
              </Button>
              <Button
                onClick={() => setQuery('run')}
                variant="contained"
                color={query == 'run' ? 'primary' : 'secondary'}
                style={{ padding: '.4rem .5rem', fontSize: '.8rem' }}
              >
                Run query
              </Button>
            </BoxFlex>

            {/* accordions */}
          </Box>
        </Box>
      </BoxFlex>

      {/* query & schema log */}
      <BoxFlex row justifyContent="flex-start" padding=".5rem" borderBottom="1px solid #fff3">
        <Tab
          Icon={HiOutlineDocumentSearch}
          label="Qurey results"
          onClick={() => setResults('query')}
          color={results == 'query' ? 'textPrimary' : 'textSecondary'}
        />

        <Tab
          Icon={MdOutlineSchema}
          label="Schema"
          onClick={() => setResults('schema')}
          color={results == 'schema' ? 'textPrimary' : 'textSecondary'}
        />
      </BoxFlex>

      <BoxFlex row flex={1}>
        {/* Refresh & data folder */}
        <BoxFlex flex={2}>
          {/* Refresh */}
          <BoxFlex>
            <Button>
              <Typography variant="subtitle1" color="secondary" style={{ fontWeight: 'bolder' }}>
                Refresh
              </Typography>
              <MdOutlineRefresh size="1.5rem" style={{ marginLeft: '.5rem' }} color="gray" />
            </Button>
          </BoxFlex>

          <BoxFlex>
            <ControlledAccordions title="dataform_Demo" value={value} setValue={setValue} data={folder} />
            <ControlledAccordions title="dataform_Set_2" value={value} setValue={setValue} data={folder2} />
          </BoxFlex>
        </BoxFlex>

        {/* Field & Type */}
        <BoxFlex flex={5}>
          <CustomButton
            badge="VIEW"
            badgeColor="#538d99"
            label="dataform_demo"
            color="textSecondary"
            font="1rem"
            EndIcon={TiDeleteOutline}
            padding="1rem .4rem"
          />
          <BoxFlex row>
            <BoxFlex flex={2} border={'1px solid #fff2'}>
              <Typography variant="subtitle1" color="initial" style={{ padding: '.5rem 1.5rem' }}>
                Field
              </Typography>
              {['data', 'device_type', 'country', 'sessions', 'revenue'].map((item: string) => (
                <CustomButton
                  label={item}
                  key={item}
                  color="textSecondary"
                  margin="0"
                  padding={'.3rem 1rem'}
                  border={'1px solid #fff2'}
                />
              ))}
            </BoxFlex>
            <BoxFlex flex={3} border={'1px solid #fff2'}>
              <Typography variant="subtitle1" color="initial" style={{ padding: '.5rem 1.5rem' }}>
                Type
              </Typography>
              {['data', 'character-varying', 'character', 'integer', 'integer'].map((item: string) => (
                <CustomButton
                  label={item}
                  key={item}
                  color="textSecondary"
                  margin="0"
                  padding={'.3rem 1rem'}
                  border={'1px solid #fff2'}
                />
              ))}
            </BoxFlex>
          </BoxFlex>
        </BoxFlex>
      </BoxFlex>
    </BoxFlex>
  )
}

export default index
