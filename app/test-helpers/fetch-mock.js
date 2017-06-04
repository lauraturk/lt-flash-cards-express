import fetchMock from 'fetch-mock';

import { oedScrubber } from '../fetchHelpers/oedScrubber'
import { visionScrubber } from '../fetchHelpers/visionScrubber'
import languageListStub from './stubs/google-lang-stub'
import translationStub from './stubs/google-translation-stub'
import oedDefinitionStub from './stubs/oed-definition-stub'
import googleVisionStub from './stubs/google-vision-stub'

export const resolveAfter2Seconds = () => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve();
    }, 2000)
  })
}

export const mockFetchCalls = () => {
  fetchMock.get('/api/languages', {
    status: 200,
    body: languageListStub
  })

  fetchMock.get('/api/definitions', {
    method: 'POST',
    body: JSON.stringify({'data': 'house'}),
    headers: { 'Content-Type':'application/json' },
    status: 200,
    response: oedDefinitionStub
  })

  fetchMock.get('/api/languages', {
      method: 'POST',
      body: JSON.stringify({'q': 'house', 'target': 'es'}),
      headers: { 'Content-Type':'application/json' },
      status: 200,
      response: translationStub
    })

  fetchMock.get('/api/vision', {
      method: 'POST',
      body: JSON.stringify('string'),
      headers: { 'Content-Type':'application/json' },
      status: 200,
      response: googleVisionStub
    })
}
