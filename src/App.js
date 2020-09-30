
import React, { Component } from 'react'
import { Menu,Image ,Input, Dropdown, Button, Form, Checkbox, Divider, Container,Header, Icon, Responsive, Segment, List, Grid, GridRow} from 'semantic-ui-react'
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import{DateInput} from 'semantic-ui-calendar-react';
import PropTypes from 'prop-types';

import "./App.css";
import Submission from './Components/Submission';



const CompanyOptions = [
  { key:'DLL',
  text:'DLL',
  value:'DLL',
  image:'https://www.mvps.net/docs/wp-content/uploads/2019/04/DLL.jpg',

  },
  {
    key:'ADCO',
  text:'ADCO',
  value:'ADCO',
  image:'https://www.mvps.net/docs/wp-content/uploads/2019/04/DLL.jpg'
  },
  {
    key:'Mahindra',
  text:'Mahindra',
  value:'Mahindra',
  image:'https://www.mahindrausa.com/images/mahindrausa-rise-logo.png'

  }
]
export default class App extends Component {
       constructor(props){
              super(props)
              this.state = {
                     activeItem: 'home',
                     open: false,
                     value:CompanyOptions[2].image
              }
              this.NavBar = this.NavBar.bind(this)
              this.FormApplication = this.FormApplication.bind(this);
              this.open = this.open.bind(this);
              this.close = this.close.bind(this);
              this.getWidth = this.getWidth.bind(this);
              this.HomepageHeading = this.HomepageHeading.bind(this);
              this.HomePage = this.HomePage.bind(this)
              
       }
       
       componentDidMount(){
        
       }
       nextPath = () => this.props.history.push('/Submission')
       
       getWidth(){
        const isSSR = typeof window === 'undefined'

        return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
       }
       
       open(){
        this.setState({ open: true })
       }
       close(){
        this.setState({ open: false })
       }
       handleChange = (e,{value}) =>  this.setState({value})





//----------------------------------------------Start of Rendered components-----------------------------------------------------------------------------------------------------------------\\
        NavBar(){
            return(
              <Menu fixed='top' size='large'  >
                  
                  <Menu.Item >
                        
                        <Image src={this.state.value} style={{height:'auto', width:' auto'}}/> 
                  </Menu.Item>
                  
                  
              

            <Menu.Menu position='right'>
              <Menu.Item 
                    to='/Industries'
                    name='Why Mahindra'
                    active={this.state.activeItem === 'Validation'}
                    onClick={this.handleItemClick}
                />
                
              
              <Menu.Item 
                  to='/Solutions'
                  name='Tractors+'
                  active={this.state.activeItem === 'Solutions'}
                  onClick={this.handleItemClick}
              />
              
              
              <Menu.Item 
                  to='/Resources'
                  name='Implements+'
                  active={this.state.activeItem === 'Resources'}
                  onClick={this.handleItemClick}
              />

              <Menu.Item 
                  to='/Careers'
                  name='Utility Vehicles'
                  active={this.state.activeItem === 'Careers'}
                  onClick={this.handleItemClick}
              />
              <Menu.Item 
                  to='/AboutUs'
                  name='Parts '
                  active={this.state.activeItem === 'About Us'}
                  onClick={this.handleItemClick}
              />
              <Menu.Item 
                  to='/ContactUs'
                  name='Build Your Own'
                  active={this.state.activeItem === 'Contact Us'}
                  onClick={this.handleItemClick}
              />
              <Menu.Item>
                <Dropdown
                  button
                  className='icon'
                  
                  labeled
                  icon='world'
                  
                  search
                  text='Select Language'
                />
              </Menu.Item>
              <Dropdown 
                        onChange={this.handleChange}
                        item
                        icon='search'>  
                        
                        
                      <Dropdown.Menu>
                              <Dropdown.Item
                                  as={Link}
                                  to='/'
                                  value={CompanyOptions[0].image}
                                  image={this.state.value}
                                  onClick={this.handleChange}
                              >DLL</Dropdown.Item>
                                <Dropdown.Item
                                  as={Link}
                                  to='/AGCO'
                                  image={this.state.value}
                                  value={CompanyOptions[1].image}
                                  onClick={this.handleChange}
                              >AGCO</Dropdown.Item>
                                <Dropdown.Item
                                  as={Link}
                                  to='/Mahindra'
                                  image={this.state.value}
                                  value={CompanyOptions[2].image}
                                  onClick={this.handleChange}
                              >Mahindra</Dropdown.Item>
                              </Dropdown.Menu>
                              
                  </Dropdown>
              
              <Button icon='font' o/>

              
            </Menu.Menu>
            </Menu>
            )
            } 

    HomepageHeading(){
                 
            return(
          <div  
            className ="bg_image" >
            
            <Container textAlign='center'>
              
              <div  >
                
                <h1 ><span className='h1_bold'>See how much financing</span> <span className='h1_light'> you qualify for.</span> </h1>
                
              </div>
              {/*<br/>
              
              <Button animated style={{backgroundColor: '#e51636', color:'white', fontFamily: "Effra,Arial,sans-serif", fontSize:'24px',border: '3px, solid, #e51636'}} color='white'   onClick={() => scroll.scrollTo(700)}>
                  <Button.Content visible>Get Started</Button.Content>
                  <Button.Content hidden><Icon name='arrow circle down'/></Button.Content>
                  
              </Button>*/}

            </Container>
            
            </div>
            )

      }
        HomePage(){
          return(
            <>
            <div>

            <this.HomepageHeading />
          </div>
          <div style={{ backgroundColor:'#ffffff' }} >
          <Grid columns={2} stackable>
            
            <Grid.Column width='4' textAlign='center'  style={{marginLeft:'16px', paddingBottom: '4em', paddingTop: '5em' }}>
              <Grid.Row textAlign='left' style={{padding:'1em'}}>
                  <Header as='h3' style={{ fontSize: '30px', fontFamily:'Effra,Arial,sans-serif',color:'#e51636',  borderTop: '3px solid #e51636',paddingTop:'10px'}}>
                    What is Pre-Approval?
                  </Header>
                  <p style={{ fontSize: '20px', fontFamily:'Effra,Arial,sans-serif' }} textalign='left'>
                  Getting pre-approved helps you shop for equipment within your means and shows you’re a serious buyer.</p>
                  <p style={{ fontSize: '20px', fontFamily:'Effra,Arial,sans-serif', paddingBottom:'2em' }} textalign='left'>
                  Being pre-approved also helps us work with you to select an equipment loan with an interest rate and other terms suited to your needs.
                  </p>
              </Grid.Row>
              <Grid.Row style={{padding:'1em', paddingBottom:'2em'}}>
                <Icon size='massive' name='handshake'/>
              </Grid.Row>{/*
              <Grid.Row textAlign='center' style={{padding:'1em'}}>
                <Header as='h2' style={{color:'#e51636',fontSize:'32px'}}>  It's fast and secure </Header>
                  
                  
                  <Icon size='large' style={{color:'#e51636'}}name='plus'/>
                  
                  
                  <Header as='h2' style={{color:'#e51636',fontSize:'32px'}}>  There is no impact on your credit to view offers</Header>

              </Grid.Row>*/}

              <Grid.Row textAlign='center' style={{padding:'1em'}}>
                  <Header as='h3' style={{ fontSize: '30px', fontFamily:'Effra,Arial,sans-serif',color:'#e51636'}}>
                    Questions?
                  </Header>
                  <p style={{ fontSize: '20px', fontFamily:'Effra,Arial,sans-serif', paddingBottom:'.5em' }} textalign='left'>
                 Please reach out to us with any questions you might have. 
                  </p>
                  <p style={{ fontSize: '20px', fontFamily:'Effra,Arial,sans-serif',}} textalign='left'>
                    Phone Number: (555) 444-3333 
                  </p>
                  <p style={{ fontSize: '20px', fontFamily:'Effra,Arial,sans-serif', paddingBottom:'3.5em'  }} textalign='left'>
                    Email: questions@dllfinance.com 
                  </p>
              </Grid.Row >
              <Grid.Row style={{ paddingBottom:'10px',borderBottom: '3px solid #e51636', borderLength:'30px', padding:'1em'}}>
                <Icon size='massive' name='conversation' />
              </Grid.Row >

            </Grid.Column>
              <Grid.Column width='11' textAlign='center' style={{ paddingBottom: '5em', paddingTop: '6em', marginLeft:'16px', marginRight:'16px' }}>
                
              <this.FormApplication/>
                
              </Grid.Column>
            
            
          </Grid>
        </div>
  
        
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>FAKE LINK</List.Item>
                    <List.Item as='a'>PRE-APPROVAL</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>ALPHA</List.Item>
                    <List.Item as='a'>BRAVO</List.Item>
                    <List.Item as='a'>CHARLIE</List.Item>
                    <List.Item as='a'>DELTA</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>
                    Footer Header
                  </Header>
                  <p>
                  This is fake text to take up space. This is fake text to take up space. This is fake text to take up space. 
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      
    
      </>

          )
        }
          FormApplication(){
                  const options = [
                    { key: 'Farm', text: 'Farm', value: 'Farm' },
                    { key: 'Personal', text: 'Personal', value: 'Personal' },
                    { key: 'Business', text: 'Business', value: 'other' },
                  ]
                  
                      return (
                            
                    <div style={{backgroundColor:'#ffffff'}} >
                      <div style={{border:'5px solid',borderColor: '#e51636'}} >
                            <h1  style={{textAlign:'center', color:'#fff' ,backgroundColor:'#e51636', padding:'10px'}}>Credit Calculator</h1>
                            
                          <Form style={{padding: '20px'}} >
                          <Container >
                          
                            <Container textAlign='left' >
                            <Container style={{ borderBottom:'3px solid #e51636', paddingBottom: '20px'}} >
                            <h2 
                            style={{    color: '#e51636',
                              size:'32px',
                              fontWeight: 'bold',
                              fontFamily: '"Effra", Arial, sans-serif',
                              textAlign: 'left'}}  >1. Personal Information </h2>
                              <div style={{overflow:'hidden'}}>
                              <p style={{color: '#666666',
                                        size:'16px',
                                        fontWeight: 'normal',
                                        fontFamily: '"Effra", Arial, sans-serif',margin:0,display:'inline', float:'left'}}> Required Fields</p>
                                        <p style={{color:'#ff0000',size:'16px',
                                        fontWeight: 'normal',
                                        fontFamily: '"Effra", Arial, sans-serif',margin:0,display:'inline'}}>*</p>
                              </div>
                            <br/>
                  
                              <Form.Group widths='equal'>
                                  <Form.Field required>
                                    <label style={{
                                        color: '#666666',
                                        size:'16px',
                                        fontWeight: 'normal',
                                        fontFamily: '"Effra", Arial, sans-serif'}}>
                                        First Name
                                      </label>
                                      <Input
                                      placeholder="First Name (must match driver's license)"
                                      
                                      value=''
                                      name='firstname' type='text' font='arial'/>
                                  </Form.Field>
                                  <Form.Field required>
                                    <label style={{
                                        color: '#666666',
                                        size:'16px',
                                        fontWeight: 'normal',
                                        fontFamily: '"Effra", Arial, sans-serif'}}>
                                        Last Name
                                      </label>
                                      <Input
                                      placeholder="Last Name (must match driver's license)"
                                      name='lastname' type='text' font='arial'/>
                                  </Form.Field>
                  
                  
                                  
                                  </Form.Group>
                            
                              <Form.Group widths='equal'>
                                <Form.Field required>
                                      <label style={{
                                          color: '#666666',
                                          size:'16px',
                                          fontWeight: 'normal',
                                          fontFamily: '"Effra", Arial, sans-serif'}}>
                                          Address 1
                                        </label>
                                        <Input
                                        placeholder='Address 1'

                                        name='adress' type='text' font='arial'/>
                                </Form.Field>
                                    <Form.Field optional>
                                    <label style={{
                                        color: '#666666',
                                        size:'16px',
                                        fontWeight: 'normal',
                                        fontFamily: '"Effra", Arial, sans-serif'}}>
                                        Address 2
                                      </label>
                                      <Input
                                      placeholder='Address 2'

                                      name='adress' type='text' font='arial'/>
                                  </Form.Field>
                                </Form.Group>
                                <Form.Group widths='equal'>
                                <Form.Field required>
                                      <label style={{
                                          color: '#666666',
                                          size:'16px',
                                          fontWeight: 'normal',
                                          fontFamily: '"Effra", Arial, sans-serif'}}>
                                          City
                                        </label>
                                        <Input
                                        placeholder='City'
                                        name='adress' type='text' font='arial'/>
                                </Form.Field>
                                    <Form.Field required>
                                    <label style={{
                                        color: '#666666',
                                        size:'16px',
                                        fontWeight: 'normal',
                                        fontFamily: '"Effra", Arial, sans-serif'}}>
                                        State
                                      </label>
                                      <Input
                                      placeholder='State'
                                      name='adress' type='text' font='arial'/>
                                  </Form.Field>
                                  <Form.Field required>
                                    <label style={{
                                        color: '#666666',
                                        size:'16px',
                                        fontWeight: 'normal',
                                        fontFamily: '"Effra", Arial, sans-serif'}}>
                                        Zip/Postal Code
                                      </label>
                                      <Input
                                      placeholder='Zip'

                                      name='adress' type='text' font='arial'/>
                                  </Form.Field>
                                </Form.Group>
                                <Form.Group widths='equal'>
                                  <Form.Field required>
                                      <label style={{
                                          color: '#666666',
                                          size:'16px',
                                          fontWeight: 'normal',
                                          fontFamily: '"Effra", Arial, sans-serif'}}>
                                          Social Security Number 
                                        </label>
                                        <Input
                                        placeholder='xxx-xx-xxxx'

                                        name='Email' type='text' font='arial'/>
                                  </Form.Field>
                                  <Form.Field required>
                                        <label style={{
                                            color: '#666666',
                                            size:'16px',
                                            fontWeight: 'normal',
                                            fontFamily: '"Effra", Arial, sans-serif'}}>
                                            Confirm Social Security Number 
                                          </label>
                                          <Input
                                          placeholder='xxx-xx-xxxx'

                                          name='Phone' type='phone' font='arial'/>
                                  </Form.Field>
                  
                  
                                </Form.Group>
                                <Form.Group widths='equal'>
                                <Form.Field required>
                                      <label style={{
                                          color: '#666666',
                                          size:'16px',
                                          fontWeight: 'normal',
                                          fontFamily: '"Effra", Arial, sans-serif'}}>
                                          Date of Birth
                                        </label>
                                        <DateInput
                                        placeholder='Date of Birth'

                                        name='Email' type='text' font='arial'/>
                                  </Form.Field>
                                  <Form.Field required>
                                      <label style={{
                                          color: '#666666',
                                          size:'16px',
                                          fontWeight: 'normal',
                                          fontFamily: '"Effra", Arial, sans-serif'}}>
                                          Email
                                        </label>
                                        <Input
                                        placeholder='Email'

                                        name='Email' type='text' font='arial'/>
                                  </Form.Field>
                                  <Form.Field required>
                                        <label style={{
                                            color: '#666666',
                                            size:'16px',
                                            fontWeight: 'normal',
                                            fontFamily: '"Effra", Arial, sans-serif'}}>
                                            Phone Number
                                          </label>
                                          <Input
                                          placeholder='(xxx) xxx-xxxx'

                                          name='Phone' type='phone' font='arial'/>
                                  </Form.Field>
                  
                  
                                </Form.Group>
                      
                        </Container>
                  
                      <div>
                        < Container textAlign='left' >
                          
                            
                            <h2 style={{    color: '#e51636',
                              size:'32px',
                              fontWeight: 'bold',
                              fontFamily: '"Effra", Arial, sans-serif',
                              textAlign: 'left', paddingTop: '20px'}} >2. Use information </h2>
                            
                            
                              
                            <Form.Group widths='equal'>
                                <Form.Field required >
                                <label style={{
                                                color: '#666666',
                                                size:'16px',
                                                fontWeight: 'normal',
                                                fontFamily: '"Effra", Arial, sans-serif'}}>
                                                  Equipment Use
                                              </label>
                                            <select>
                                              <option hidden>Please Select...</option>
                                              <option>Farm</option>
                                              <option>Personal</option>
                                              <option>Business</option>
                                            </select>
                  
                                      </Form.Field>
                                    
                                      <Form.Field required>
                                        <label style={{
                                            color: '#666666',
                                            size:'16px',
                                            fontWeight: 'normal',
                                            fontFamily: '"Effra", Arial, sans-serif'}}>
                                            Desired Amount
                                          </label>
                                          <select>
                                              <option hidden>Please Select...</option>
                                              <option>Up to $10,000</option>
                                              <option>Up to $20,000</option>
                                              <option>Up to $30,000</option>
                                              <option>Up to $40,000</option>
                                              <option>Up to $50,000</option>
                                         
                                            </select>
                                  </Form.Field>
                                    
                                </Form.Group>
                          
                        </Container>
                        </div>
                        <div>
                        <Container textAlign='center'>
                          <br></br>
                        
                        <Form.Field
                          control={Checkbox}
                          label={{ children: 'I agree to the Terms and Conditions' }} required
                        />   
                        <Form.Field
                          control={Checkbox}
                          required
                        label={{children: 'I agree to the Third Party Data Agreement'}}/>         
                          
                          
                       
                          <button className='button'>
                          <Link to='/Submission' className='link' >
                                Submit
                            </Link>
                            </button>
                        </Container>
                      
                        </div>
                        </Container>
                        </Container>
                        </Form>
                        </div>     
                        </div>
                  ) }

      

       render(){
              return(
            <BrowserRouter>
              <div>
                
                <this.NavBar/>
                <Switch>
                  <Route path='/' component={this.HomePage} exact/>
                  <Route path='/Submission' component={Submission} exact/>
                </Switch>
              </div>
            </BrowserRouter>
              )
       }
   
}



 