import React from 'react';
import {
  Avatar,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Container,
  Chip,
  Box,
  CardContent,
  Card,
  CardActionArea,
  CardMedia
} from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend
);

// This is placeholder data for the pie chart
const pieData = {
  labels: ['Workout Days', 'Rest Days'],
  datasets: [
    {
      data: [42, 30], // Example data: 42 workout days and 30 rest days in the year
      backgroundColor: ['#ffb703', '#fb8500'],
      borderColor: ['white'],
      borderWidth: 2,
      color: 'black',
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

  // This is placeholder data for the user
const userData = {
  name: 'Jane Doe',
  profileImage: '/profile-pic-jane-doe.jpg',
  bio: 'Passionate about fitness and healthy living. My goal is to inspire others to embrace a healthy lifestyle.',
  fitnessGoals: ['Run a marathon', 'Yoga Master'],
  workoutSessions: 42, // Total number of workouts
  musicGenres: ['Hip-Hop', 'EDM', 'Pop'],
  coaches: ['John Smith', 'Emily Doe'],
  workouts: [
    { id: 1, title: 'Morning Run', description: '5k run around the park', image: 'https://picsum.photos/200/200?random=1' },
    { id: 2, title: 'Weight Training', description: 'Chest and arms workout at the gym', image: 'https://picsum.photos/200/200?random=2' },
    { id: 3, title: 'Swimming', description: '1 hour of swimming at the local pool', image: 'https://picsum.photos/200/200?random=3' },
    { id: 4, title: 'Cycling', description: '20 miles cycling in the countryside', image: 'https://picsum.photos/200/200?random=4' },
    { id: 5, title: 'Yoga', description: '1 hour of yoga in the studio', image: 'https://picsum.photos/200/200?random=5' },
    { id: 6, title: 'Hiking', description: 'Hiking on the mountain trail', image: 'https://picsum.photos/200/200?random=6' },
  ],
};

const ProfilePage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
       {/* Profile banner with indigo background */}
       <Box sx={{
        backgroundColor: '#219ebc',
        paddingY: 6,
        borderRadius: 1,
        marginBottom: 4,
        textAlign: 'center',
        color: 'white',
      }}>
        <Avatar
          alt={userData.name}
          src={userData.profileImage}
          sx={{ width: 150, height: 150, border: '4px solid white', marginX: 'auto' }}
        />
        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 2 }}>
          {userData.name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {userData.bio}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, marginBottom: 4 }}>
        {/* Left card */}
        <Paper sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Favorite Music Genres
            </Typography>
                {userData.musicGenres.map((genre, index) => (
                <Chip key={index} label={genre} sx={{ mr: 0.5, mb: 0.5 }} />
                ))}
            <br/>
            <Typography variant="h6" component="h2" gutterBottom>
              Workout Sessions
            </Typography>
            <Typography variant="subtitle1">
              Total Workouts: {userData.workoutSessions}
            </Typography>
            <br/>
            <Typography variant="h6" component="h2" gutterBottom>
              Socials
            </Typography>
            <Chip label="Instagram" sx={{ mr: 0.5, mb: 0.5 }} />
            <Chip label="Facebook" sx={{ mr: 0.5, mb: 0.5 }} />
            <Chip label="Strava" sx={{ mr: 0.5, mb: 0.5 }} />
        </Paper>

        {/* Middle Pie Chart */}
        <Paper sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 0 }}>
            <Pie data={pieData} options={options} />
        </Paper>


        {/* Right card */}
        <Paper sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Coaches
            </Typography>
            <List>
              {userData.coaches.map((coach, index) => (
                <ListItem key={index}>
                  <ListItemText primary={coach} />
                </ListItem>
              ))}
            </List>
            <Typography variant="h6" component="h2" gutterBottom>
              Fitness Goals
            </Typography>
            <List>
              {userData.fitnessGoals.map((goal, index) => (
                <ListItem key={index}>
                  <ListItemText primary={goal} />
                </ListItem>
              ))}
            </List>
          </Paper>
      </Box>

      <Typography variant="h5" component="h2" gutterBottom>
        Recent Workouts
      </Typography>
      <Grid container spacing={3}>
        {userData.workouts.map((workout) => (
          <Grid item key={workout.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={workout.image}
                  alt={workout.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                    {workout.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {workout.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProfilePage;