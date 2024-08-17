import BackButton from '@/components/buttons/back-button';
import Button from '@/components/buttons/button';
import CardFooter from '@/components/cards/card-footer';
import CardFrame from '@/components/cards/card-frame';
import Avatar from '@/components/common/avatar';
import Header from '@/components/common/header';
import Tab from '@/components/common/tab';
import Input from '@/components/inputs/input';
import Radio from '@/components/inputs/radio';
import TextArea from '@/components/inputs/text-area';
import Upload from '@/components/inputs/upload';
import Table from '@/components/table/table';
import TableBody from '@/components/table/table-body';
import TableHeader from '@/components/table/table-head';

const image =
  'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?t=st=1723911677~exp=1723915277~hmac=c17cbd252f850e652474349480c132f8d87b7cbcf0bbac40a341642a3db4b8c9&w=740';

export const components = [
  {
    title: 'Button',
    component: <Button text='add your text here' />,
    subComponent: (
      <Button
        text='add your text here'
        isOutline
      />
    ),
  },
  {
    title: 'Back Button',
    component: <BackButton />,
  },
  {
    title: 'Card Frame',
    component: <CardFrame>Lorem ipsum dolor sit amet.</CardFrame>,
  },
  {
    title: 'Card Footer',
    component: <CardFooter btnText='Add' />,
  },
  {
    title: 'Avatar',
    component: (
      <Avatar
        name='John Doe'
        image={image}
        size={64}
        email='johndoe@gmail.com'
      />
    ),
    subComponent: (
      <Avatar
        name='John Doe'
        image={image}
        size={64}
        email='johndoe@gmail.com'
        isSquare
      />
    ),
  },
  {
    title: 'Header',
    component: (
      <Header
        title='Header'
        buttonText='add'
        isBackButton
      />
    ),
  },
  {
    title: 'Tab',
    component: (
      <Tab
        step={0}
        tabs={['Tap 1', 'Tap 2', 'Tap 3']}
      />
    ),
  },
  {
    title: 'Input',
    component: (
      <Input
        label='Email'
        error='404 not found'
        placeholder='Enter your email'
        touched
      />
    ),
  },
  {
    title: 'Radio',
    component: <Radio checked />,
  },
  {
    title: 'TextArea',
    component: <TextArea />,
  },
  {
    title: 'Upload',
    component: (
      <Upload
        name=''
        value={''}
      />
    ),
  },
  {
    title: 'Table',
    component: (
      <Table>
        <TableHeader tableHeader={['Name', 'Email', 'Contact', 'Action']} />
        <TableBody
          action
          name='Jone'
          email=''
        />
      </Table>
    ),
  },
];
