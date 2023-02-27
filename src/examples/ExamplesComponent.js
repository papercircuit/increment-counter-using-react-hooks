import examples from './examples';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ExamplesComponent = () => {
    // loop through each object in the examples array
    // and create a new component for each object

    return (
        <div>
            {examples.map((example, index) => {
                return (
                    <Card id={example.name} key={index}
                    variant="outlined">
                        <Typography variant="h6">{example.name}</Typography>
                        <Typography variant="body1">{example.description}</Typography>
                        <SyntaxHighlighter language="javascript" style={docco}>
                            {example.code}
                        </SyntaxHighlighter>
                        <Button variant="contained" onClick={example.function}>{example.name}</Button>
                    </Card>
                );
            }
            )}
        </div>
    );
}

export default ExamplesComponent;


