import React from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteWordListFB, loadWordListFB } from '../redux/modules/word';

const Word = () => {
    React.useEffect(() => {
        dispatch(loadWordListFB());
      }, []);

    const word_list = useSelector(state => state.word.word_list)

    const nav = useNavigate();
    const dispatch = useDispatch();

    return(
        <Contents>
            {word_list && word_list.map((a,i) => {
                return(<Card key={i}>
                    <Wordwrap>
                        <div style={{fontSize : '48px'}}>{a.name}</div>
                        <div style={{fontSize : '20px'}}>{a.mean}</div>
                        <div style={{fontSize : '20px', color : 'blue'}}>{a.ex}</div>
                        <div style={{fontSize : '20px', color : 'blue'}}>{a.anal}</div>
                    </Wordwrap>
                    <Button onClick={() => {dispatch(deleteWordListFB(word_list[i].id)); dispatch(loadWordListFB())} }>삭제</Button>
                </Card>)
                }
            )}
        </Contents>
    )
}

const Contents = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
margin: auto;
`;

const Card = styled.div`
display : block;
border : 2px solid rgb(10, 112, 41);
border-radius : 10px;
width : 250px;
margin : 10px;
`;

const Wordwrap = styled.div`
    float : left;
    margin : 10px 20px;
`;

const Button = styled.button`
    float : right;
    margin : 10px 10px;
    padding : 0px 5px;
    border-radius : 30px;
    cursor: pointer;
`;

export default Word;