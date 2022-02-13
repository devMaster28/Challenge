/**
 * @format
 */

import 'react-native';
import React from 'react';
import useDocuments from '../../../src/hooks/useDocuments';

import { renderHook, act } from '@testing-library/react-hooks';



it('hook obtain documents is not empty', () => {

    const { result } = renderHook(() => useDocuments())
    act(() => {
        result.current.callApi("documents")
        console.log(result.current)

    })
    console.log(result.current)

    expect(0).toBe(1)

});
