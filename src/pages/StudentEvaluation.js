import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import StudentProfile from "../components/StudentProfile";
import FilterArea from "../components/FilterArea";
import CommentCard from "../components/CommentCard";
import StudentTablePagination from "../components/StudentTablePagination";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RateCard from "../components/RateCard";

import { useDispatch } from "react-redux";
import { setViewStudent, setCommentList } from "../redux/actions/studentAction";

//SELECTOR
import { useSelector } from "react-redux";

export default function StudentEvaluation(props) {
  //DISPATCHER
  const dispatch = useDispatch();

  const { id } = props.match.params;
  const [loading, setLoading] = useState(true);

  const student = useSelector((state) => state.student);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setViewStudent(id));
      dispatch(setCommentList(id));
      setLoading(false);
    }, 400)
  }, [loading]) // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#131414', width: '100%' }} >
      <Navbar />

      <br /><br /><br />

      {/* body */}
      <Box style={{ width: '70%', margin: 'auto', marginBottom: 120 }}>

        <Box>
          <StudentProfile id={id} />
        </Box>

        <Box style={{
          marginTop: 40, display: 'flex',
          alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
        }}>
          {student.authEmail === undefined ||  student.authEmail === "" ? ( <div>
            <Typography style={{ color: '#26CE8D', fontSize: 18 }}>
                  
                </Typography>
          </div> ) : (<RateCard />)}
        </Box>

        {/* filter component  */}
        <Box style={{ marginTop: 20, marginRight: -5 }}>
          <FilterArea />
        </Box>

        <Box style={{ marginTop: 100 }}>
          <CommentCard />
          <Box style={{ textAlign: 'center', width: 300, margin: 'auto' }}>
            <StudentTablePagination />
          </Box>
        </Box>

      </Box>


      <Box style={{
        width: '100%', height: 180, backgroundColor: '#131414',
        borderTop: '1px solid #515456'
      }}>
        <Footer />
      </Box>

    </Box>
  );
}
